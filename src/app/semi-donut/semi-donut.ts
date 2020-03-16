export interface ISemiDonut {
    data: IData  
}

interface IChartData {
    name: string;
    value: number,
}

interface IData {
    title: string,
    chartData: IChartData[],
    header: string,
    ABBVoice: string,
    ABBVoice1: string,
    ABBVoice2: string,
    ABBVoice3: string
}