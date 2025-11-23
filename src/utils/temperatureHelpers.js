/**
 * Calculate average temperature for a specific time period
 */
export const calculatePeriodTemp = (temperatureData, startHour, endHour) => {
  try {
    if (!temperatureData || !Array.isArray(temperatureData)) {
      return null;
    }

    const temps = temperatureData.slice(startHour, endHour);
    if (temps.length === 0) return null;

    const avg = temps.reduce((sum, t) => sum + t, 0) / temps.length;
    return Math.round(avg);
  } catch (error) {
    console.error("Error calculating temperature:", error);
    return null;
  }
};

/**
 * Calculate total rain for a specific time period
 */
export const calculatePeriodRain = (rainData, startHour, endHour) => {
  try {
    if (!rainData || !Array.isArray(rainData)) {
      return null;
    }

    const rains = rainData.slice(startHour, endHour);
    if (rains.length === 0) return null;

    const total = rains.reduce((sum, r) => sum + r, 0);
    return Math.round(total * 10) / 10;
  } catch (error) {
    console.error("Error calculating rain:", error);
    return null;
  }
};

/**
 * Calculate average wind speed for a specific time period
 */
export const calculatePeriodWind = (windData, startHour, endHour) => {
  try {
    if (!windData || !Array.isArray(windData)) {
      return null;
    }

    const winds = windData.slice(startHour, endHour);
    if (winds.length === 0) return null;

    const avg = winds.reduce((sum, w) => sum + w, 0) / winds.length;
    return Math.round(avg * 10) / 10;
  } catch (error) {
    console.error("Error calculating wind:", error);
    return null;
  }
};

/**
 * Detect current time period of the day
 */
export const getCurrentPeriod = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

/**
 * Define time periods of the day
 */
export const TIME_PERIODS = {
  MORNING: { start: 6, end: 12 },
  AFTERNOON: { start: 12, end: 17 },
  EVENING: { start: 17, end: 21 },
  NIGHT: { start: 21, end: 30 },
};

/**
 * Define available data types for display
 */
export const DATA_TYPES = {
  TEMPERATURE: "temperature",
  RAIN: "rain",
  WIND: "wind",
};
