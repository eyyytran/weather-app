export default interface IWeatherObj {
    name: string
    id: number
    conditions: string
    icon: string
    temperature: {
        actual: number
        feelsLike: number
        high: number
        low: number
    }
    wind: number
    pressure: number
    humidity: number
    sunrise: string
    sunset: string
}
