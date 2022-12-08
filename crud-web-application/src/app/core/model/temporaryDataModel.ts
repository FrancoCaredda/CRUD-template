//TODO: Implement 
export class TemporaryDataModel {
    constructor(private data0: string, 
                private data1: string,
                private data2: string) { }

    public setData0(data0: string): void {
        this.data0 = data0;
    }

    public setData1(data1: string): void {
        this.data1 = data1;
    }

    public setData2(data2: string): void {
        this.data2 = data2;
    }

    public getData0(): string {
        return this.data0;
    }

    public getData1(): string {
        return this.data1;
    }

    public getData2(): string {
        return this.data2;
    }
}