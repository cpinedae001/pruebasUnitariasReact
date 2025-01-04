import PropTypes from "prop-types";


const getREsult = ()=>{
    return 4+4;
}

export const FirtApp = ({title  , subtitle='no hay subtitle'}) => {


    // if(!title || !subtitle){
    //     throw new Error('El props title no exisite o es null');
    // }
    return (
        <>
            {/* <h1>{ JSON.stringify(newMessage) }</h1>
            
            esto es para imprimir algun objeto directo
            */}
            {/* <h1>{getREsult()}</h1> */}
            <h1>{title}</h1>
            <h2>{subtitle }</h2>
            <p>esto es una prueba desde react</p>
        </>
    );
};

FirtApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.any
}
/* actualmente no se recomienda hacer esto
lo que se puede hacer es al momento de declarar el prop se de un valor 
por defecto.

ejemplo:
export const FirtApp = ({title ='NO hay ningun titulo' , subtitle}) => {

*/
// FirtApp.defaultProps ={
//     name: 'cristhian',
//     // title: 'Cristhian y Carol',
//     subtitle: 'no tenemos ningun subtitle'
// }

