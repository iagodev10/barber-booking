import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.iceWhite};
        transform: scale(1.02);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
`

export const Imagem = styled.div`
    width: 80px;
    height: 80px;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(242, 242, 242, 0.05);
    border-radius: 8px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Title = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.iceWhite};
`

export const Description = styled.p`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.4;
`

export const Price = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.iceWhite};
    margin-top: 0.5rem;
`