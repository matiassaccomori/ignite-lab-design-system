import * as React from "react"

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 60.01c0-6.976-9.955-13.587-25.218-17.687 3.522-13.653 1.957-24.514-4.941-27.992-1.59-.816-3.449-1.202-5.479-1.202v4.787c1.125 0 2.03.193 2.788.558 3.327 1.674 4.77 8.05 3.645 16.25-.27 2.018-.71 4.143-1.248 6.31-4.794-1.03-10.028-1.824-15.531-2.339-3.303-3.971-6.727-7.578-10.176-10.733 7.974-6.504 15.459-10.067 20.546-10.067v-4.787c-6.726 0-15.531 4.207-24.435 11.505-8.903-7.255-17.709-11.42-24.435-11.42v4.787c5.063 0 12.572 3.542 20.546 10.003A105.67 105.67 0 0045.96 38.695c-5.528.515-10.762 1.31-15.556 2.361a57.625 57.625 0 01-1.272-6.225c-1.15-8.2.269-14.575 3.57-16.271.735-.386 1.689-.558 2.814-.558v-4.787c-2.055 0-3.914.386-5.528 1.202-6.873 3.478-8.414 14.318-4.868 27.927C9.906 46.466 0 53.056 0 60.011c0 6.976 9.955 13.588 25.218 17.688-3.522 13.652-1.957 24.514 4.941 27.991 1.59.816 3.449 1.202 5.504 1.202 6.726 0 15.532-4.207 24.435-11.505 8.903 7.255 17.709 11.42 24.435 11.42 2.055 0 3.914-.387 5.528-1.203 6.873-3.477 8.414-14.317 4.868-27.927C110.094 73.577 120 66.966 120 60.011zM88.153 45.694c-.905 2.769-2.03 5.624-3.302 8.479a98.465 98.465 0 00-3.204-5.152c-1.125-1.717-2.324-3.392-3.522-5.023 3.473.45 6.824 1.009 10.028 1.696zM76.951 68.554c-1.908 2.898-3.865 5.646-5.895 8.2-3.645.28-7.338.43-11.056.43-3.693 0-7.387-.15-11.007-.408a117.553 117.553 0 01-5.92-8.157 107.697 107.697 0 01-5.087-8.544 107.735 107.735 0 015.063-8.565c1.908-2.898 3.865-5.645 5.895-8.2A144.94 144.94 0 0160 42.88c3.693 0 7.387.151 11.007.409 2.03 2.554 4.011 5.28 5.92 8.157a107.697 107.697 0 015.087 8.543 115.677 115.677 0 01-5.063 8.565zm7.9-2.79a84.657 84.657 0 013.376 8.543c-3.205.687-6.58 1.267-10.078 1.717 1.199-1.653 2.397-3.348 3.522-5.087a117.981 117.981 0 003.18-5.173zM60.05 88.668a93.112 93.112 0 01-6.8-6.87c2.201.087 4.452.15 6.726.15 2.3 0 4.574-.042 6.8-.15a87.965 87.965 0 01-6.726 6.87zM41.85 76.024a124.161 124.161 0 01-10.029-1.695c.905-2.77 2.03-5.625 3.302-8.48a98.55 98.55 0 003.205 5.152 140.413 140.413 0 003.522 5.023zm18.076-44.67a93.093 93.093 0 016.8 6.869 172.42 172.42 0 00-6.727-.15c-2.3 0-4.574.042-6.8.15a87.964 87.964 0 016.727-6.87zm-18.1 12.643c-1.2 1.653-2.398 3.349-3.523 5.088a117.442 117.442 0 00-3.18 5.151 84.665 84.665 0 01-3.375-8.543c3.204-.665 6.58-1.245 10.077-1.696zM19.69 70.873C11.031 67.63 5.43 63.38 5.43 60.01s5.601-7.642 14.26-10.862c2.104-.794 4.403-1.503 6.776-2.168 1.394 4.207 3.228 8.586 5.503 13.073-2.25 4.465-4.06 8.822-5.43 13.008a81.254 81.254 0 01-6.849-2.19zm13.16 30.674c-3.327-1.674-4.77-8.05-3.645-16.25.27-2.017.71-4.142 1.248-6.31 4.794 1.03 10.028 1.824 15.531 2.34 3.303 3.97 6.727 7.577 10.176 10.732-7.974 6.505-15.459 10.068-20.546 10.068-1.101-.022-2.03-.215-2.764-.58zM90.868 85.19c1.15 8.2-.269 14.576-3.57 16.271-.735.387-1.689.559-2.814.559-5.063 0-12.572-3.542-20.546-10.004A105.681 105.681 0 0074.04 81.305c5.528-.515 10.762-1.31 15.556-2.361.563 2.168 1.003 4.25 1.272 6.246zm9.417-14.317c-2.103.794-4.402 1.502-6.775 2.168-1.394-4.208-3.229-8.587-5.504-13.073 2.25-4.465 4.06-8.823 5.43-13.009a84.882 84.882 0 016.874 2.19c8.659 3.241 14.26 7.492 14.26 10.862-.025 3.37-5.626 7.642-14.285 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M59.975 69.82c6.174 0 11.179-4.391 11.179-9.81 0-5.417-5.005-9.81-11.178-9.81-6.174 0-11.179 4.393-11.179 9.81 0 5.419 5.005 9.81 11.178 9.81z"
        fill="#81D8F7"
      />
    </svg>
  )
}
