import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  UploadCloud,
  ImagePlus,
  X,
} from "lucide-react";

export default function ImageUploader() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setImages((prev) => [...prev, ...files]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
        onDrop,
      accept: {
        "image/*": [],
      },
      multiple: true,
    });

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div>

      {/* Upload Area */}

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-3xl transition-all cursor-pointer p-12 text-center

        ${
          isDragActive
            ? "border-orange-500 bg-orange-50"
            : "border-slate-300"
        }`}
      >
        <input {...getInputProps()} />

        <UploadCloud
          size={60}
          className="mx-auto text-orange-500"
        />

        <h2 className="text-2xl font-bold mt-6">
          Upload Cat Images
        </h2>

        <p className="text-slate-500 mt-3">
          Drag & Drop images here
        </p>

        <p className="text-slate-400 my-4">
          or
        </p>

        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold"
        >
          Browse Files
        </button>

        <p className="text-sm text-slate-400 mt-5">
          JPG • PNG • WEBP
        </p>

      </div>

      {/* Preview */}

      {images.length > 0 && (

        <div className="mt-10">

          <h2 className="font-bold text-xl mb-6">
            Uploaded Images
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {images.map((image, index) => (

              <div
                key={index}
                className="relative group rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={image.preview}
                  alt=""
                  className="w-full h-64 object-cover"
                />

                <button
                  onClick={() =>
                    removeImage(index)
                  }
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={18} />
                </button>

              </div>

            ))}

            {/* Add More */}

            <div
              {...getRootProps()}
              className="border-2 border-dashed rounded-3xl flex flex-col items-center justify-center h-64 cursor-pointer hover:border-orange-500 transition"
            >

              <input {...getInputProps()} />

              <ImagePlus
                size={40}
                className="text-orange-500"
              />

              <p className="mt-3 font-semibold">
                Add More
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}