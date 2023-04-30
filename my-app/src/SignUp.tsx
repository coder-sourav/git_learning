import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { useFormStyles } from "./FormUi";
import { useForm } from "react-hook-form";
import { TextField, Typography } from "@material-ui/core";
interface ISignUp {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

export default function SignUp() {
  const classes = useFormStyles();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>();

  const history = useHistory();

  const renderForm = () => {
    return (
      <>


      <div className={classes.textFieldConatiner}>
      <TextField
      type="text"
      id="firstname"
      label="First name"
      variant="outlined"
      // className={classes.sourav}
      ></TextField>
      <TextField
      type="text"
      id="lastname"
      label="Last name"
      variant="outlined"
     className={classes.sourav}
      ></TextField>
      </div>
      <div className={classes.textFieldConatiner}>

        <TextField
          type="text"
          id="emailAddress"
          label="Email"
          variant="outlined"
          error={errors.emailAddress?.message !== undefined}
          helperText={errors.emailAddress?.message}
          className={classes.textField}
          {...register("emailAddress", {
            required: "true",
            pattern: {
              value: /\w+@\w+\.\w+/,
              message: "Email Pattern is Not valid",
            },
          })}
        />
        </div>
        <div className={classes.textFieldConatiner}>
        <TextField
          type="text"
          id="password"
          label="Password"
          variant="outlined"
          error={errors.password?.message !== undefined}
          helperText={errors.password?.message}
          className={classes.textField}
          
          {...register("password", {
            required: "true",
          })}
        />
      </div>
      </>
    );
  };





  const renderButtons = () => {
    return (
      <Footer
        primary={{ text: "SignUp ", onClick: () => console.log("sign up") }}
        secondary={{ text: "Login ", onClick: () => history.push("/login") }}
        teritary={{ text: "Home ", onClick: () => history.push("/") }}
      />
    );
  };
  return (
    <div className={classes.root}>
    <form className={classes.container}>
    <Typography variant="h5">Wellcome to the SignUp page</Typography>
      {renderForm()}
      {renderButtons()}
    </form>
    </div>
  );
}
