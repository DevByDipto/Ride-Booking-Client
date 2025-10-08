import type { IError } from '@/types';
import React from 'react'
import { toast } from 'sonner';

const ShowErrorToast = (error:IError<null>) => {
    // null use nah kore better ki korte partam ?(support)
   toast.error(error?.data?.message)
}

export default ShowErrorToast