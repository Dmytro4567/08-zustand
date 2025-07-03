'use client';

import {useState} from 'react';
import css from './NoteForm.module.css';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createNote} from '@/lib/api';
import type {CreateNote} from '@/types/note';
import {useRouter} from 'next/navigation';

export default function NoteForm() {
    const queryClient = useQueryClient();
    const router = useRouter();

    const [formData, setFormData] = useState<CreateNote>({
        title: '',
        content: '',
        tag: 'Todo',
    });

    const {mutateAsync, isPending} = useMutation({
        mutationFn: async (note: CreateNote) => {
            const newNote = await createNote(note);
            return newNote;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['notes']});
            router.push('/notes/filter/All');
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await mutateAsync(formData);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.formGroup}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    minLength={3}
                    maxLength={50}
                    className={css.input}
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({...formData, title: e.target.value})
                    }
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    name="content"
                    rows={8}
                    maxLength={500}
                    className={css.textarea}
                    value={formData.content}
                    onChange={(e) =>
                        setFormData({...formData, content: e.target.value})
                    }
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="tag">Tag</label>
                <select
                    id="tag"
                    name="tag"
                    className={css.select}
                    value={formData.tag}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            tag: e.target.value as CreateNote['tag'],
                        })
                    }
                >
                    <option value="Todo">Todo</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Shopping">Shopping</option>
                </select>
            </div>

            <div className={css.actions}>
                <button
                    type="submit"
                    className={css.submitButton}
                    disabled={isPending}
                >
                    {isPending ? 'Creating...' : 'Create note'}
                </button>
            </div>
        </form>
    );
}
