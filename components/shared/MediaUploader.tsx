import { useToast } from "../ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

interface MediaUploaderProps {
  type: string;
  onValueChange: (value: string) => void;
  setImage: (value: string) => void;
  publicId: string;
  image: string;
}

const MediaUploader = ({
  type,
  onValueChange,
  setImage,
  publicId,
  image,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: "Image uploaded successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="fc_imaginify"
      options={{ multiple: false, resourceType: "image" }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => {
        return <div className="flex flex-col"></div>;
      }}
    </CldUploadWidget>
  );
};

export default MediaUploader;
