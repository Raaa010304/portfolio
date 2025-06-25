'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Using react-icons for Instagram and LinkedIn

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const ContactSection = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    const { name, email, message } = values;
    const mailtoLink = `mailto:yasrilalamin7@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`; // Replace 'your-email@example.com' with your actual email address
    window.open(mailtoLink, '_blank');
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="text-3xl font-bold tracking-tight font-headline">Get In Touch</CardTitle>
            <CardDescription>
              Have a project in mind or just want to say hello? Drop me a line.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                        <Input type="email" placeholder="your@email.com" {...field} />
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
                        <Textarea placeholder="Your message here..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-right">
                  <Button type="submit">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">Connect with me on social media:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="YOUR_LINKEDIN_URL" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
> {/* Replace with your LinkedIn URL */}
                  <FaLinkedin size={32} />
                </a>
                <a href="https://www.instagram.com/ysrlalamien/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors"> {/* Replace with your Instagram URL */}
                  <FaInstagram size={32} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
