export class Questions{
        //  sections:{section:string;
        //            parameters:{parameter:string;
        //                        level:{ questionLevel:number;
        //                                questions:{ questionNo:number;
        //                                            questionDescription:string;
        //                                            response:{option:string;points:number}[],}[],}[],}[],
        //           }[];

        sections: Isection[];     
             
}

export interface Isection{
        section:string;
        parameters: Iparameter[];
}

export interface Iparameter{
        parameter:string;
        level: Ilevel[];
}

export interface Ilevel{
        questionLevel:number;
        Questions: Iquestion[];
}

export interface Iquestion{
        questionNo:number;
        questionDescription:string;
        response:{option:string;points:number}[]
}