import type { ForcastData } from "@/api/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets } from "lucide-react";

interface WeatherForcastProps {
  data: ForcastData;
}

interface DailyForcast {
  temp_min: number;
  temp_max: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  date: number;
  dateLabel: string;
  humidity: number;
  wind: number;
}

const WeatherForcast = ({ data }: WeatherForcastProps) => {
  const dailyForcast = data.list.reduce((acc, forcast) => {
    const dateKey = format(new Date(forcast.dt * 1000), "yyyy-MM-dd");
    const dateLabel = format(new Date(forcast.dt * 1000), "EEE, MMM d");

    if (!acc[dateKey]) {
      acc[dateKey] = {
        temp_min: forcast.main.temp_min,
        temp_max: forcast.main.temp_max,
        weather: forcast.weather[0],
        date: forcast.dt,
        dateLabel,
        humidity: forcast.main.humidity,
        wind: forcast.wind.speed,
      };
    } else {
      acc[dateKey].temp_max = Math.max(
        acc[dateKey].temp_max,
        forcast.main.temp_max
      );
      acc[dateKey].temp_min = Math.min(
        acc[dateKey].temp_min,
        forcast.main.temp_min
      );
    }

    return acc;
  }, {} as Record<string, DailyForcast>);

  const nextDays = Object.values(dailyForcast).slice(0, 5);
  const formatTemp = (temp: number) => `${Math.round(temp)}°C`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {nextDays.map((day) => (
            <div
              key={day.date}
              className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">{day.dateLabel}</p>
                <p className="text-sm text-muted-foreground capitalize">
                  {day.weather.description}
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <span className="flex items-center text-blue-500">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  {formatTemp(day.temp_min)}
                </span>
                <span className="flex items-center text-red-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  {formatTemp(day.temp_max)}
                </span>
              </div>
              <div className="flex justify-end gap-4">
                <span className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{day.humidity}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-slate-900" />
                  <span className="text-sm">{day.wind}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForcast;
