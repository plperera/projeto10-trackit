import dayjs from "dayjs";
import { Dayjs } from "dayjs";

export default function Teste (){
    console.log(dayjs().locale('pt-br').format('DD/MM'))
    const testee = dayjs().locale('pt-br')

    function DiaDaSemana (dia){
        switch (dia) {
            case 0: return "Domingo"
            case 1: return "Segunda"
            case 2: return "Terça"
            case 3: return "Quarta"
            case 4: return "Quinta"
            case 5: return "Sexta"
            case 6: return "Sabado"
        }
    }
return(
    <div>
        <h1>{testee.$D}/{testee.$M}/{testee.$y} - {testee.$H}:{testee.$m} - {DiaDaSemana(testee.$W)}</h1>
    </div>
)
}