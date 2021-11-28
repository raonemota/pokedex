import styled from "styled-components";
import "./_font.css"

export const HeaderArea = styled.div`

    background-color: #F87888;
    border-bottom: 1px solid #FA4156;

    .container {
        max-width: 1000px;
        display: flex;
        margin: auto;
        height: 180px;

        .search-box {
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: column;

            h1 {
                margin-bottom: 0;
                color: #FFF;
                font-family: 'Anton', sans-serif;
                font-size: 44px;
            }
            
            input {
                height: 50px;
                width: 70%;
                padding: 10px 30px;
                border-radius: 28px;
                background-color: #F8B8BB;
                border: 1px solid #FADCDF;
                outline: none;
                font-size: 18px;
                color: #CC6672;    
                margin: auto;
                margin-top: 0;
                margin-bottom: 5px;
                box-shadow: 6px 6px 2px -3px rgba(250,65,86,0.86)
            }

            span{
                font-size: 11px;
                color: #aa1527;
                font-family: 'Shippori Antique', sans-serif;
            }
            
        }
    }

`;

