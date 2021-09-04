import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEyeInvisible } from 'react-icons/ai'
export default function Login() {
    const [mensagem, setMensagem] = React.useState();
    const [iconExibirSenha, setIconeExibirSenha] = React.useState(
        <AiOutlineEyeInvisible
            style={{
                fontSize: '22px',
                width: '20px!important',
                height: '30px'
            }}
        />
    );
    const email = React.useRef(null);
    const senha = React.useRef(null);
    const validandoFormulario = (event) => {
        event.preventDefault();
        console.log(`e-mail: ${email.current.value}`);
        console.log(`senha: ${senha.current.value}`);
        if (email.current.value !== 'eliasdeoliveirabr@gmail.com') {
            setMensagem(
                <Alert severity="warning">
                    Ops! E-mail inválido.
                </Alert>
            )
        } else if (senha.current.value !== '123') {
            setMensagem(
                <Alert severity="warning">
                    Ops! Senha inválido.
                </Alert>
            )
        } else {
            setMensagem(
                <Alert severity="success">
                    Parabéns! Usuário é válido.
                </Alert>
            )
        }
    }

    const exibirSenha = () => {
        if (senha.current.type === 'password') {
            senha.current.type = "text";
            setIconeExibirSenha(
                <BiShow
                    style={{
                        fontSize: '22px',
                        width: '20px!important',
                        height: '30px'
                    }}
                />);
        } else {
            senha.current.type = "password";
            setIconeExibirSenha(
                <AiOutlineEyeInvisible
                    style={{
                        fontSize: '22px',
                        width: '20px!important',
                        height: '30px'
                    }}
                />);
        }
    }
    return (
        <Container>
            <ContainerLogin>
                <Paper style={{ margin: 10 }}>
                    <Flex>
                        <ItemFlex1>
                            <Logo src="/assets/images/logo_xtrategie.png" />
                        </ItemFlex1>
                        <ItemFlex2>
                            <Titulo>
                                Faça seu login
                            </Titulo>
                            {mensagem}
                            <form onSubmit={validandoFormulario}>
                                <ItemFormulario>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        type="email"
                                        label="E-mail"
                                        placeholder="E-mail"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        inputlabelprops={{
                                            shrink: true,

                                        }}
                                        inputProps={{
                                            ref: email
                                        }}
                                        size="small"
                                    />
                                </ItemFormulario>
                                <ItemFormulario>
                                    <Box display="flex" alignItems="center">
                                        <Box>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                type="password"
                                                label="Senha"
                                                placeholder="Senha"
                                                variant="outlined"
                                                style={{ width: '100%' }}
                                                inputlabelprops={{
                                                    shrink: true
                                                }}
                                                inputProps={{
                                                    ref: senha
                                                }}
                                                size="small"
                                            />
                                        </Box>
                                        <Box style={{ padding: '5px' }}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{
                                                    height: '100%'
                                                }}
                                                onClick={() => exibirSenha()}>
                                                {iconExibirSenha}
                                            </Button>
                                        </Box>
                                    </Box>
                                </ItemFormulario>
                                <ItemFormulario>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        style={{
                                            fontWeight: '550',
                                            width: '100%'
                                        }}>
                                        Entrar
                                    </Button>
                                </ItemFormulario>
                            </form>
                        </ItemFlex2>
                    </Flex>
                </Paper>
                <Footer>
                    <div>
                        Software Powered by Xtrategie
                    </div>
                    <div>
                        2009 - 2021
                    </div>
                </Footer>
            </ContainerLogin>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    padding: 0px;
    margin: 0px;
    background: #a4bbdd;
    color: white;
`;

const Footer = styled.footer`
    margin-top: 50px;
    text-align: center;
    color: #2C3E50;
    font-weight: 600;
    
`;

const ContainerLogin = styled.div`
    width: 768px;
    margin: auto;
    @media (max-width: 800px) {
        max-width: 100%!important;
        padding: 0px;
    }
`;

const Logo = styled.img`
    max-width: 100%!important;
    height: auto;
    @media (max-width: 800px) {
        max-width: 100%!important;
    }
`;

const Titulo = styled.h1`
    text-align: center;
    font-size: 19px;
    color: #2C3E50!important;
`;

const Flex = styled.div`
    display: -ms-flexbox!important;
    display: flex!important;
	/* flex-flow: row wrap; */
    align-items: center;
    flex-wrap: wrap!important;
    max-width: 100%;
    padding: 50px!important;
    margin: 0px;
    background: white;
    color: fff;
    @media (max-width: 800px) {
        padding: 0px!important;
        flex-wrap: wrap!important;
    }
`;

const ItemFlex1 = styled.div`
    flex: 1;
    flex-grow: 1;
    text-align: center;
    padding: 10px 20px;
    @media (max-width: 800px) {
        max-width: 100%!important;
        padding: 20px;
        border: none;
        flex: 1 1 auto;
    }
`;

const ItemFlex2 = styled.div`
    flex: 1;
    flex-grow: 1;
    border-left: solid 1px #a4bbdd;
    text-align: center;
    padding: 10px 0px 20px 30px;    
    @media (max-width: 800px) {
        max-width: 100%!important;
        padding: 20px 20px 30px 20px!important;
        border-left: none;
        flex: 1 1 auto;
    }
`;

const ItemFormulario = styled.div`
    margin-top: 20px;
`;
