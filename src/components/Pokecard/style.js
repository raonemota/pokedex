import styled from "styled-components";

export const Card = styled.div`

        width: 290px;
        height: 195px;
        border-radius: 20px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.background };
        border: 1px solid ${props => props.border } ;

        .titleCard {
            align-items: center;
            display: flex;
            gap: 10px;
            justify-content: space-between;
            margin: 0;
            height: 50px;

            
            .idPokemon {
                color: rgba(255,255,255,0.4);
                font-size: 32px;
                font-weight: bold;
            }

            .namePokemon {
                text-transform: capitalize;
                color: ${props => props.text };
            }
        }

        .bodyCard {
            display: flex;
            justify-content: space-between;

            .itensCard{
                display: flex;
                flex-direction: column;
                gap: 10px;;
                margin-top: 25px;
                
                span {
                    background-color: ${props => props.border };
                    padding: 4px 6px;
                    border-radius: 28px;
                    width: 100px;
                    text-align: center;
                    font: 22px;
                    font-weight: 700;
                    color: white;
                }
            }
        }



`;