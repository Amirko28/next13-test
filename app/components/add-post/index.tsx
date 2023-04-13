'use client';

import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import classNames from 'classnames';

type FormValues = {
    text: string;
};

export const AddPost = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const addPost = async () => {
        await handleSubmit(async (data) => {
            const res = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            console.log(res);
            reset();
        })();
    };
    const { trigger, isMutating } = useSWRMutation('add-post', addPost);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                trigger();
            }}
            className="flex w-full justify-center"
        >
            <input
                disabled={isMutating}
                {...register('text')}
                className={classNames(
                    'h-24 w-1/3 rounded-md border-2 border-slate-500 bg-gray-700 px-3 py-2 text-lg text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-950',
                    {
                        'blur-sm': isMutating
                    }
                )}
            />
        </form>
    );
};
