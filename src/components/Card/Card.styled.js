import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  margin: 0 2rem;
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  & > div,
  img {
    flex: 1;
  }

  @media (max-width: 675px) {
    flex-direction: column;
    max-width: 340px;
    height: 615px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 35px;
  justify-content: space-between;
`;

export const Image = styled.img`
  display: block;
  min-width: 300px;
  overflow: hidden;
  object-fit: contain;
  @media (max-width: 675px) {
    max-height: 240px;
  }
`;

export const Preview = styled.p`
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
`;

export const Description = styled.p`
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActualPrice = styled.h3`
  color: ${({ theme }) => theme.colors.darkCyan};
  font-size: 30px;
`;

export const OldPrice = styled.p`
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 22px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  border: none;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  & > img {
    max-width: 15px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.veryDarkCyan};
  }
`;
export const Icon = styled.img`
  width: 25px;
  border-radius: 5px;
`;
