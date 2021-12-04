import  styled  from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  fontSize: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>Super Deal! Free shipping until 25th December</Container>
    </div>
  )
}

export default Announcement
