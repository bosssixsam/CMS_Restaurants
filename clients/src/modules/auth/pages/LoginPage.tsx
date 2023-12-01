import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { NotifyContext, SITE_URL, useAppDispatch } from "@/shared";

import { LoginForm } from "@/modules/auth/components";

import { LOGIN_FORM, LOGIN_SCHEMA } from "@/modules/auth/constants";
import { ILoginParams } from "@/modules/auth/interface";

import { login } from "@/modules/auth/thunk";
import { setAuthCredentials } from "@/modules/auth/utils";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { api } = useContext(NotifyContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginParams>({
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: LOGIN_FORM,
  });

  const onSubmit = async (data: ILoginParams) => {
    dispatch(login(data))
      .unwrap()
      .then((value) => {
        console.log("fasd", data);

        // if (accessToken) {
        //   if (hasAccess(allowedRoles, permissions)) {
        //     setAuthCredentials(accessToken, user_id, permissions, user_name);
        //     router.push(ROUTES.DASHBOARD);
        //     return;
        //   }
        //   setErrorMsg("form:error-enough-permission");
        // } else {
        //   setErrorMsg("form:error-credential-wrong");
        // }

        if (value.accessToken) {
          setAuthCredentials(value.accessToken, value.profile.id, value.permission, value.profile.name);

          api.success({
            message: "Login success",
          });
        }

        navigate(SITE_URL.HOME);
      })
      .catch((errors) => {
        api.error({
          message: errors.message,
        });
      });
  };

  return (
    <div className="w-screen min-h-screen p-[24px] flex justify-center items-center bg-bg_grey">
      <div className="w-full max-w-[600px] min-h-[400px] bg-white rounded-lg p-[12px]">
        <LoginForm control={control} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default LoginPage;
