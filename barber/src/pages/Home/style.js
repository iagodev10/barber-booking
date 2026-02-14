import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
`

export const Texto = styled.div`
    position: absolute;
    top: 55%;
    left: 5%;
    transform: translateY(-50%);
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 500px;
    z-index: 2;
`

export const Main = styled.h1`
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.iceWhite};
    text-transform: uppercase;
    letter-spacing: -1px;
`

export const Sub = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 2rem;
    max-width: 400px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 99px;
    padding: 14px 32px;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${({ theme }) => theme.colors.iceWhite};
    color: ${({ theme }) => theme.colors.deepBlack};
    border: 2px solid ${({ theme }) => theme.colors.iceWhite};

    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.iceWhite};
        box-shadow: 0 0 20px rgba(242, 242, 242, 0.2);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`

export const Servicos = styled.section`
    width: 100%;
    min-height: 40vh;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 2rem;
`