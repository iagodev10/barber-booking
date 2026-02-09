import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 6px;
  transition: all 0.35s ease;
  background-color: ${({ theme }) => theme.colors.iceWhite};

  &:hover {
    filter: brightness(1.18);
    box-shadow: 
      0 0 10px rgba(242, 242, 242, 0.6),
      0 0 22px rgba(242, 242, 242, 0.45);
    transform: scale(1.08);
  }
`;



export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Agendar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 33px;
  padding: 10px 16px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.iceWhite};

  &:hover {
    filter: brightness(1.18);
    box-shadow: 
      0 0 8px rgba(242, 242, 242, 0.6),
      0 0 20px rgba(242, 242, 242, 0.4);
    transform: translateY(-1px);
  }
`;


export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.deepBlack};
`;

export const Login = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 6px;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.iceWhite};

  &:hover {
    filter: brightness(1.18);
    box-shadow: 0 0 10px rgba(242, 242, 242, 0.5);
  }
`;
