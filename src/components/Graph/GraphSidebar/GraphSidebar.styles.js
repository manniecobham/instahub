import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 400px;
  height: 546px; */
  height: 100%;
  margin: 0;
  border: 4px solid white;
  border-radius: 10px;
  overflow: auto;
`;

export const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: rgba(242, 242, 242, 1);
  height: 100%;
  width: 100%;
  border-bottom: 1px solid lightgray;
  /* border-right: 1px solid lightgray; */
  transition: background 0.2s ease-out;
  &:hover {
    background: white;
  }
`;

export const SidebarContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SidebarText = styled.span`
  display: flex;
  flex-direction: column;
  color: darkslategray;
  margin-right: 30px;
`;

export const SidebarRelativeChange = styled.span`
  display: flex;
  flex-direction: row;
  background: lightgray;
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
  color: darkslategray;
`;

export const SidebarContentBottom = styled.div`
  display: flex;
  padding-top: 5px;
  font-size: 32px;
  font-weight: 600;
  color: black;
`;
