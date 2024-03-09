"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal, ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModel from "@/hooks/useAuthModel";
import { useEffect } from "react";

const AuthModel = () => {
  const supbaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { isOpen, onClose } = useAuthModel();

  useEffect(() => {
    if (session) {
      onClose();
      router.refresh();
    }
  }, [session, onClose, router]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Modal
      title="Welcome Back"
      description="Login To Continue"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supbaseClient}
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
                inputText: "#ffffff",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModel;
