"use client";

import react, { useState } from "react";
import Modal from "./Modal";
import useUploadModel from "@/hooks/useUploadModel";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import uqniueId from "uniqid";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/userUser";
import { useRouter } from "next/navigation";

const UploadModel = () => {
  const uploadModel = useUploadModel();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModel.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    try {
      setIsLoading(true);
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile) {
        return toast.error("Please select a song and image file");
      }

      const uniqueID = uqniueId();
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error("Something went wrong, Failed To Upload Song");
      }

      //   Upload Image

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Something went wrong, Failed To Upload Image");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user?.id,
          title: values.title,
          author: values.author,
          image_path: imageData?.path,
          song_path: songData?.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error("Something went wrong, please try again");
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song Uploaded Successfully");
      uploadModel.onClose();
    } catch (error) {
      toast.error(`Something went wrong, ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      title="Add a Song"
      description="Upload an audio mp3 file to add to your library."
      isOpen={uploadModel.isOpen}
      onChange={() => {}}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: "Title is required" })}
          placeholder="Song Title"
        />

        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: "Title is required" })}
          placeholder="Song Author"
        />

        <div>
          Select a Song File
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            {...register("song", { required: "Song is required" })}
            placeholder="Song Audio"
            className="mt-2"
            accept=".mp3"
          />
        </div>

        <div>
          Select a Image File
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            {...register("image", { required: "Title is required" })}
            placeholder="Image File"
            className="mt-2"
            accept="image/*"
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full py-4">
          Upload Music
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModel;
