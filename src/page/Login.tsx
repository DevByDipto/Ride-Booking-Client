import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { useLoginMutation } from '../redux/features/auth/auth.api'
import LoadingButton from '../components/shared/LoadingButton'


const Login = () => {
     
    const [login, { isLoading, isError, isSuccess }] = useLoginMutation()
 
const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(50),
})


  // 1. Define your form.
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema), 
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
   const onSubmit = async (values: z.infer<typeof registerSchema>)=> {
 
    
    const res = await login(values).unwrap()
if(res.success){
  
}
    console.log(res)
  }

  return (
    <div className='min-h-screen flex items-center'>

    

     <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md mx-auto ">

     <h1 className="text-xl font-semibold">Login</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

{/* email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
{/* password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
{/* {
  isLoading ? <div>Loading...</div> : <Button type="submit">Submit</Button>
} */}
<LoadingButton isLoading={isLoading} type="submit">Sign Up</LoadingButton>
<div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>Already have a account? Please</p>
            <a
              href="#"
              className="text-primary font-medium hover:underline"
            >
              Login
            </a>
          </div>
        
      </form>
    </Form>
    </div>
    </div>
  )
}

export default Login



