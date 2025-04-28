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
const Btn = styled.button`
  background-color: tomato;
`;
const Input = styled.input.attrs({ required: true })`
  background-color: whitesmoke;
`;
function App() {
  return (
    <Father>
      <Box bgcolor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgcolor="tomato" />
      {/* as를 사용해서 태그를 바꿀 수 있음 */}
      <Btn as="a" href="https://www.naver.com/">
        로그인
      </Btn>
      <Input />
    </Father>
  );
}

export default App;
