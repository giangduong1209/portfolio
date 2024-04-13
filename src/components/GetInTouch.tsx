"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2, Mail, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email must be at least 1 characters.",
    })
    .email("This is not a email."),
  phone: z.string().regex(phoneRegex, "Invalid Number"),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const GetInTouch = ({
  valuesForm,
}: {
  valuesForm: (values: {
    username: string;
    email: string;
    phone: string;
    message: string;
  }) => {};
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    valuesForm(values);
    setTimeout(() => {
      setLoading(false);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Thank you for getting in touch!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  I have received your message and would like to thank you for
                  writing to mine. I will reply by email as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    }, 2000);
  }

  return (
    <div className="py-20 sm:pt-60" id="getintouch">
      <h1
        className="text-5xl md:text-6xl text-primary font-bold"
        data-aos="fade-down-right"
      >
        Get In Touch
      </h1>
      <Toaster position="top-right" />

      <div className="mt-5 md:flex md:justify-between gap-10">
        <div className="md:w-1/2" data-aos="fade-down-right">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={loading ? true : false}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  ""
                )}
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div
          className="md:w-1/2 mt-10"
          data-aos="fade-right"
          data-duration="3000"
        >
          <div>
            <h2 className="uppercase font-semibold text-5xl mb-5 text-pink-500">
              Don&apos;t be shy
            </h2>
            <p className="text-lg">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="group border-2 border-slate-500 mt-10 md:px-52 py-10 text-center hover:cursor-pointer hover:border-primary">
            <a
              href="https://drive.google.com/file/d/1mUelgdMJSBQ9FABTUQt02VcsG5N74-82/view?usp=sharing"
              target="_blank"
              className="uppercase font-bold group-hover:text-primary"
            >
              my Curriculum Vitae
            </a>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-5">
              <Mail className="text-primary" />
              <a
                href="mailto:giangduong.dev@gmail.com"
                className="hover:text-blue-500"
              >
                giangduong.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-5 mt-2">
              <Phone className="text-primary" />
              <a href="tel:+84333559432" className="hover:text-blue-500">
                0399 559 432
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
