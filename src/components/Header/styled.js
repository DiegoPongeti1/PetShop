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
                                        
                                }
                }
`;