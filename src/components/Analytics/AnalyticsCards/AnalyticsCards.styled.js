import styled from "styled-components";

export const Container = styled.div`
  &.analysis {
    margin: 20px 20px 20px 20px;
    gap: 30px;
    display: grid;
    height: 100%;
    grid-template-areas:
      "graph graph performance"
      "graph graph performance"
      "dropdown dropdown floor";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    .analytics-card {
      background: rgb(255, 255, 255);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
    }

    .analysis {
      &__graph {
        grid-area: graph;
      }

      &__performance {
        grid-area: performance;
      }

      &__dropdown {
        grid-area: dropdown;
      }

      &__floor {
        grid-area: floor;
      }
    }
  }
`;
