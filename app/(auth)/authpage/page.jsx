import Form from "@/components/shared/Form/Form";

const AuthPage = (props) => {
  const {login, feedback, order} = props;

  return (
    <div>
      <Form login={login} feedback={feedback} order={order}/>
    </div>
  )
}

export default AuthPage;

