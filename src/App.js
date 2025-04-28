import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) =>
    props.bgcolor}; // props 이름을 전달 받아서 사용
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  //Box의 모든 속성을 가지고 온 다음 추가하는 방법
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <Father>
      <Box bgcolor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgcolor="tomato" />
    </Father>
  );
}

export default App;
