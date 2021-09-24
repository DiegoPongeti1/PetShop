import styled from 'styled-components';

export const AreaHeader = styled.div`
        height: 100px;
        background-color: #0963EB;
        color: #fff;
        .container{
                padding:5px 20px;
                display: flex;
                align-items: center;
        }

                .logo{
                        flex: 1;

                        img{
                                width: 80px;
                        }
                }
                        
                nav{
                        ul{
                                display: flex;
                        }

                                li{
                                        list-style: none;
                                        margin-left: 30px;

                                        a{
                                                text-decoration: none;
                                                color: #000000;
                                                display: flex;
                                                align-items: center;
                                                &:hover{
                                                        color: #F5BB00;
                                                }
                                        }
                                        
                                }
                                /* #divBusca{
                                         background-color:#2F4F4F;
                                         border:solid 1px;
                                        border-radius:15px;
                                         width:300px;
                                } */
                               

                }
                /* #txtBusca{
                                        float:left;
                                        margin-left: 100px;
                                        background-color:transparent;
                                        padding-right:5px;
                                        font-style:italic;
                                        font-size:18px;
                                        border:none;
                                        height:32px;
                                        width:260px;
                                } */
`;