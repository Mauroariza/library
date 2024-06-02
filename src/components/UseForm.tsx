import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
};

function UserForm() {
    const { register, handleSubmit } = useForm<FormData>();
  
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <form className="p-8 " onSubmit={handleSubmit(onSubmit)}> 
            <div className="h-auto flex flex-col items-center  text-white ">
                <label>
                    Nombre:
                    <input className="" {...register('name')} type="text" name="name" />
                </label>
                <label>
                    Correo electrónico:
                    <input className="mt-4" {...register('email')} type="email" name="email" />
                </label>
                <input type="submit" value="Enviar" />
            </div>

        </form>
    );
}

export default UserForm;

//useForm.handleSubmit
//useForm.register


/*
useForm{
    handleSubmit: (onSubmit: (data: FormData) => void) => (e: React.BaseSyntheticEvent) => void;
    register: (name: string, options?: RegisterOptions<unknown>) => (ref: unknown) => void;
}

*/
