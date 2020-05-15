import React from "react";

const icons = {
  github: (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>github</title>
      <path d="M31.663 13.237c-0.31-2.289-1.274-4.060-2.502-6.303-1.228-2.244-3.455-3.842-5.026-4.957-1.57-1.115-3.752-1.632-5.852-1.839s-4.702-0.22-6.45 0.242c-2.433 0.643-3.993 1.31-5.645 2.817s-2.881 3.036-3.925 4.75c-1.046 1.714-1.839 4.336-1.964 5.613-0.126 1.277-0.023 3.025 0.425 5.015 0.447 1.989 1.457 3.84 2.903 6.072s3.477 3.645 5.83 5.072c2.352 1.426 7.287 2.507 9.157 2.242 1.872-0.264 4.442-0.907 7.081-3s4.108-5.555 4.912-7.718c0.803-2.163 1.366-5.716 1.056-8.005l-0-0.001zM27.945 23.058c-0.080 0-1.090-1.852-1.147-1.99-0.044-0.105 0.413-0.954 0.459-0.965 0.046-0.012 1.113 1.943 1.102 1.989s-0.333 0.966-0.413 0.966v0zM24.067 10.81c-0.046-0.126-0.069-0.241-0.058-0.287s0.321-0.828 0.23-1.506c-0.093-0.678-0.39-1.76-0.368-1.794s1.228 0.931 1.916 2.484 1.274 2.737 1.492 4.841c0.218 2.104 0.115 3.657-0.63 5.072s-1.285 2.22-1.699 2.645c-0.413 0.425-1.273 0.828-1.377 0.828s-0.47-1.863-0.758-2.45c-0.287-0.586-0.803-1.357-0.792-1.483 0 0 0.86-0.77 1.159-1.23s1.274-2.082 1.228-3.876c-0.046-1.795-0.299-3.117-0.345-3.243l0-0.001zM28.795 21.471c-0.093 0.080-1.328-2.051-1.263-2.116 0.104-0.102 0.448-1.206 0.517-1.253s1.205 2.024 1.205 2.162c0 0.138-0.367 1.127-0.459 1.207l0-0zM30.355 15.813c-0.148-0.127-1.101-2.265-1.227-2.312s-0.413 0.448-0.345 0.633 1.331 2.265 1.366 2.461c0.035 0.195-0.092 1.196-0.126 1.047s-0.987-2.001-1.102-2.001c-0.115 0-0.425 0.403-0.413 0.472s1.251 2.369 1.251 2.518c0 0.15-0.172 1.093-0.275 0.92-0.104-0.172-1.309-2.173-1.331-2.23s0.023-2.806-0.115-4.037c-0.137-1.23-0.596-3.668-2.306-5.659s-3.523-3.358-6.14-3.98c-2.617-0.622-4.2-0.585-6.162-0.494-1.963 0.092-4.798 1.219-6.737 4.025s-2.227 3.588-2.663 5.613c-0.435 2.024 0.046 5.026 0.402 6.325 0.356 1.3 1.285 3.186 2.341 4.163s2.375 1.587 3.409 1.966c1.034 0.38 2.594 0.61 2.72 0.564s0.069-1.633 0-1.817-0.126-0.275-0.551-0.253c-0.424 0.023-1.192 0.012-1.697-0.218s-0.918-0.69-1.205-1.207c-0.287-0.517-0.7-1.15-0.918-1.392s-0.678-0.656-0.62-0.736c0.058-0.080 0.918-0.161 1.515 0.023s1.607 0.863 2.043 1.139c0.436 0.276 0.998 0.678 1.194 0.678s0.598-0.92 0.77-1.139c0.171-0.218 0.573-0.955 0.401-1.115-0.172-0.162-1.228-0.207-1.756-0.345-0.528-0.139-1.48-0.656-2.158-1.541s-0.987-2.208-0.975-3.14c0.011-0.931 0.918-2.725 1.101-3.082s0.425-0.69 0.31-0.816c-0.115-0.125-0.608-0.815-0.723-1.299s0.299-1.668 0.379-1.713 0.632 0.104 1.045 0.161c0.413 0.057 1.33 0.31 1.675 0.54s0.47 0.345 0.665 0.345c0.195 0 1.71-0.345 2.227-0.46s2.043-0.299 2.616-0.184 1.435 0.633 1.584 0.54c0.149-0.091 0.494-0.746 1.228-0.93 0.735-0.185 1.985-0.265 2.135-0.138s0.367 1.449 0.253 2.128c-0.115 0.678-0.31 1.070-0.195 1.254s0.665 1.426 0.378 2.53c-0.288 1.104-0.7 2.68-2.066 3.726-1.365 1.047-1.813 1.219-1.974 1.323-0.16 0.104 0 0.426 0.149 0.552s1.159 0.805 1.652 2.323c0.494 1.518 0.574 2.415 0.574 2.726s0.357 0.437 0.631 0.38c0.275-0.058 0.596-0.253 1.045-0.599s1.721-1.253 1.813-1.207c0.093 0.046 0.884 1.736 1.079 1.794s0.333-0.080 0.355-0.195c0.023-0.115-0.619-1.345-0.791-1.68-0.172-0.332-0.299-0.528-0.253-0.631s0.436-0.575 0.517-0.495c0.080 0.081 0.93 1.427 1.078 1.657s0.264 0.276 0.104 0.552c-0.16 0.276-0.723 1.012-0.998 1.254s-0.378 0.54-0.54 0.414c-0.16-0.127-0.963-1.575-1.090-1.599-0.125-0.023-0.47 0.287-0.435 0.39s1.090 1.668 1.090 1.737c0 0.069-0.529 0.747-1.079 1.173-0.552 0.425-0.907 0.69-1.010 0.54-0.104-0.149-1.183-2.656-1.355-2.69s-0.527 0.091-0.47 0.299c0.058 0.207 1.377 2.53 1.365 2.645-0.011 0.115-0.435 0.391-0.562 0.276-0.126-0.115-1.515-2.979-1.687-3.002s-0.47 0.058-0.47 0.334c0 0.276 1.79 2.817 1.71 2.955-0.081 0.139-0.413 0.449-0.54 0.323s-1.768-3.404-1.882-3.427c-0.115-0.023-0.528 0.092-0.528 0.172s1.859 3.53 1.848 3.61c-0.012 0.081-0.724 0.427-0.884 0.345-0.16-0.080-1.79-3.725-1.916-3.805s-0.631 0.265-0.597 0.31c0.035 0.046 2.009 3.473 1.905 3.645s-0.563 0.23-0.642 0.15-1.928-3.611-2.055-3.645c-0.125-0.035-0.515 0.16-0.481 0.31 0.035 0.15 1.962 3.37 1.905 3.393s-0.551 0.046-0.631-0.012-1.745-2.668-1.951-2.725c-0.207-0.058-0.447 0.253-0.447 0.322s1.595 2.369 1.515 2.392c-0.080 0.023-0.608-0.023-0.723-0.092s-1.216-2.024-1.365-2.070c-0.15-0.046-0.505 0.218-0.46 0.334 0.046 0.115 1.125 1.587 0.988 1.587s-0.505 0.012-0.665-0.080c-0.161-0.093-0.918-1.634-1.056-1.68-0.137-0.045-0.413 0.162-0.425 0.219-0.011 0.058 0.586 1.139 0.46 1.15s-0.54-0.012-0.643-0.092c-0.104-0.081-0.804-1.254-0.907-1.288s-0.436 0.15-0.402 0.253c0.034 0.103 0.367 0.61 0.252 0.62-0.115 0.012-2.479-0.643-3.752-1.517s-3.65-3.565-4.384-4.381c-0.735-0.817-1.756-3.255-2.111-4.578s-0.447-3.289-0.435-4.335c0.011-1.047 0.826-3.795 1.285-4.727s2.226-3.462 3.42-4.669 3.121-2.634 5.152-3.243c2.031-0.61 3.741-0.737 4.682-0.725 2.238 0.027 4.785 0.356 6.345 0.885 1.561 0.53 4.476 2.83 5.2 3.658s1.595 2.311 2.111 3.393c0.517 1.080 0.895 2.012 0.793 1.931s-0.746-1.207-0.872-1.196c-0.125 0.012-0.401 0.208-0.355 0.357s1.216 1.966 1.331 2.197c0.115 0.23 0.23 0.495 0.241 0.54 0.012 0.046 0.16 1.622 0.115 1.541s-1.159-2.105-1.308-2.162c-0.149-0.057-0.264 0.172-0.23 0.23 0.035 0.057 1.55 2.645 1.55 2.771-0.002 0.127 0.056 1.185-0.093 1.058h-0.002l0-0.005zM9.538 10.891c0.241 0.23-0.31 0.598-0.7 1.46-0.39 0.863-0.746 2.565-0.54 3.588 0.207 1.023 0.678 2.23 1.779 3.185s2.594 1.012 2.754 1.092c0.16 0.080-0.275 0.655-0.367 0.77s-0.080 0.093-0.299-0.023c-0.217-0.115-1.468-1.185-2.776-1.46-1.309-0.277-2.111 0.115-2.399 0.367s0.035 0.713 0.402 0.989 0.792 0.794 1.331 1.782c0.54 0.989 0.872 1.207 1.745 1.506 0.871 0.3 1.56 0.311 1.698 0.323s0.104 0.414 0.012 0.564c-0.092 0.15-0.447-0.23-0.975-0.38s-1.515-0.241-2.066-0.586-2.33-2.427-2.662-3.335c-0.333-0.909-1.034-2.955-1.045-3.979s-0.092-2.771 0.31-4.082c0.402-1.311 1.285-3.485 2.628-4.98s3.282-2.645 6.151-2.955c2.869-0.311 5.393 0.551 6.966 1.092s1.94 0.875 1.94 0.979c0 0-0.471 0.092-1.71 0.173s-2.043 0.737-2.089 0.817c-0.046 0.080-1.308-0.207-2.628-0.31-1.32-0.104-3.145 0.482-3.213 0.482s-0.252-0.011-0.746-0.207c-0.493-0.195-2.846-0.713-3.121-0.69s-0.883 0.77-1.010 1.886c-0.126 1.116 0.39 1.703 0.632 1.933h-0.001l-0.001-0.001zM18.88 1.139c-2.055-0.287-3.366-0.153-3.455-0.069-0.206 0.195-0.137 0.575 0.115 0.62s1.48-0.15 3.099 0.012c1.618 0.161 2.811 0.77 3.064 0.782s0.401-0.402 0.264-0.552c-0.138-0.15-1.033-0.506-3.087-0.793l0 0.001zM3.662 8.832c-1.63 1.69-1.928 3.91-2.065 4.67s0.355 1.080 0.585 0.977c0.23-0.104-0.011-0.748 0.517-2.438s1.205-2.3 1.423-2.725c0.218-0.427-0.344-0.604-0.46-0.484h0.001zM11.167 15.376c-0.184-0.483-0.046-1.115 0.069-1.656 0.115-0.54-0.402-0.518-0.528-0.391-0.333 0.334-0.459 1.392-0.333 2.047s0.712 1.621 1.022 1.771c0.31 0.15 0.608-0.046 0.54-0.368-0.070-0.322-0.586-0.92-0.77-1.403v0zM9.297 20.678c-0.505 0.334-0.012 0.667 0.195 0.667s0.412-0.080 0.321-0.402c-0.092-0.322-0.396-0.344-0.517-0.265l0.001 0zM10.341 21.587c-0.367 0.207-0.035 0.678 0.207 0.69s0.436-0.172 0.447-0.414c0.012-0.241-0.493-0.366-0.653-0.276h-0.001zM11.776 22.23c-0.517 0.115-0.345 0.622-0.092 0.657s0.47-0.058 0.54-0.322c0.068-0.265-0.123-0.407-0.447-0.335v0zM20.991 8.995c0.115 0.011 0.459 0.069 0.619 0.069s0.15 0.943 0.23 1.23c0.080 0.288 0.505 0.3 0.665 0.139 0.161-0.161-0.057-1.702-0.172-1.851s-1.223 0.060-1.365 0.091c-0.104 0.023-0.093 0.31 0.023 0.322zM24.043 27.211c0.115 0.023 0.413-0.115 0.436-0.287s-0.861-2.265-0.942-2.311c-0.080-0.046-0.608 0.131-0.608 0.23 0 0.195 0.998 2.346 1.113 2.369l0-0z" />
    </svg>
  ),
  linkedin: (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>linkedin</title>
      <path d="M2.421 9.87c0.972 0.622 2.823 0.645 4.026 0.553s3.078-1.568 3.193-4.15c0.117-2.582-1.735-3.942-1.735-3.942-2.221-1.891-5.276-0.805-5.923-0.415-0.648 0.393-2.384 1.96-1.897 4.105s1.176 3.106 2.337 3.85zM1.56 3.155c0.477-0.669 1.492-1.367 3.453-1.073s2.516 1.141 3.037 1.954c0.521 0.813 0.485 1.539 0.485 1.539s-1.267-2.178-1.457-2.143c-0.191 0.035-0.468 0.397-0.33 0.623s1.58 2.143 1.527 2.282c-0.052 0.138-0.104 0.536-0.173 0.433s-1.215-2.145-1.371-2.11c-0.156 0.035-0.365 0.277-0.26 0.553 0.104 0.277 1.353 1.954 1.301 2.023s-0.277 0.38-0.347 0.277c-0.070-0.104-1.024-1.989-1.215-1.937s-0.346 0.26-0.225 0.57c0.122 0.311 1.145 1.66 1.076 1.747-0.070 0.087-0.26 0.277-0.347 0.225s-1.076-1.643-1.232-1.625c-0.156 0.017-0.468 0.345-0.295 0.553s1.058 1.331 0.955 1.384c-0.105 0.052-0.764 0.172-0.868 0.138s-0.59-1.124-0.746-1.124-0.486 0.242-0.434 0.45c0.052 0.207 0.66 0.725 0.486 0.795s-1.961-0.19-2.759-0.761-1.667-2.801-0.26-4.772zM2.757 7.167c0.139-0.138 0.122-0.19 0.122-0.363s-0.469-0.502-0.555-0.779c-0.087-0.277-0.018-1.090 0.381-1.505s0.503-0.691 0.173-0.83c-0.33-0.138-1.041 0.295-1.198 1.211s0 1.712 0.278 2.058c0.277 0.346 0.655 0.35 0.798 0.208v0zM4.475 13.564c-0.347-0.104-2.221-0.104-2.447-0.069s-0.295 2.594-0.26 2.87c0.034 0.277 0 0.71 0.225 0.727 0 0 0.382 0.052 0.486 0.017s0.174-2.576 0.225-2.767c0.053-0.19 1.91-0.035 1.996-0.121 0.088-0.087 0.122-0.554-0.225-0.658v0zM8.97 11.991c-0.695-0.258-4.287-0.345-5.519-0.362s-2.632-0.049-2.811 0.242c-0.139 0.225-0.070 5.204-0.139 8.472s-0.278 8.248-0.173 8.438c0.104 0.19 2.1 1.608 2.256 1.729s0.555 0.173 1.614 0.155c1.058-0.017 4.512 0.156 4.929 0.052s0.885-0.26 1.024-0.553c0.139-0.294 0.174-1.799 0.243-5.205s0.572-7.936 0.486-9.735c-0.086-1.799-1.215-2.973-1.91-3.232h0.001zM9.004 16.262c-0.104-0.035-1.076-1.643-1.25-1.453s-0.225 0.363-0.017 0.675c0.208 0.31 1.198 1.815 1.215 1.988s0.052 1.020-0.018 1.020-1.25-1.885-1.388-1.815c-0.138 0.070-0.277 0.38-0.243 0.483s1.545 2.075 1.579 2.421c0.035 0.346 0 0.848-0.070 0.761s-1.18-2.282-1.37-2.178c-0.192 0.103-0.365 0.501-0.208 0.76 0.156 0.26 1.492 2.144 1.527 2.248s0 0.933-0.086 0.882c-0.087-0.052-1.232-2.179-1.405-2.162-0.174 0.017-0.348 0.45-0.278 0.692s1.701 2.368 1.666 2.61c-0.035 0.242-0.018 1.159-0.104 1.107s-1.44-2.507-1.562-2.542c-0.121-0.035-0.364 0.432-0.295 0.622 0.070 0.19 1.788 3.009 1.805 3.25 0.018 0.242 0 1.574-0.121 1.505s-1.666-3.113-1.926-3.13c-0.26-0.017-0.295 0.519-0.243 0.675 0.051 0.155 2.030 3.216 2.082 3.389s0 0.346-0.191 0.433c-0.191 0.087-0.277 0.069-0.295 0.017s-1.527-2.698-1.77-2.784-0.417 0.276-0.399 0.363c0.018 0.087 1.84 2.473 1.666 2.628s-0.66 0.173-0.781 0.052c-0.122-0.12-1.631-2.731-1.805-2.731s-0.52 0.45-0.399 0.57c0.121 0.122 1.596 2.214 1.457 2.214s-0.625 0.155-0.746 0.052c-0.121-0.103-1.284-2.058-1.475-2.041s-0.365 0.242-0.347 0.294 1.18 1.625 1.041 1.66c-0.139 0.035-0.625 0.035-0.712-0.017-0.088-0.049-0.833-1.485-0.974-1.52s-0.433 0.26-0.433 0.346c0 0.087 0.92 1.141 0.712 1.193s-1.267-0.052-1.336-0.087c-0.070-0.035-0.434-0.415-0.451-0.744s0.104-15.216 0.26-15.51c0.052-0.098 3.090 0.035 4.668 0.155 1.578 0.121 2.62-0.086 2.845 0.19s0.295 1.66 0.208 1.574c-0.087-0.086-0.694-1.28-0.902-1.227s-0.365 0.467-0.26 0.691c0.104 0.225 1.11 1.66 1.162 1.833s0.070 0.622-0.034 0.587l0.001 0zM31.875 17.87c-0.155-2.162-1.353-3.822-3.037-4.894s-4.529-1.366-6.455-0.969c-1.926 0.398-3.957 2.162-4.026 2.144s-0.017-1.487-0.070-1.85c-0.052-0.363-0.711-0.311-2.36-0.329s-3.875 0.010-3.904 0.139c-0.087 0.38 0.070 7.954 0.087 10.686s-0.121 5.724 0 6.069c0.121 0.346 1.232 1.625 1.649 1.625s4.443-0.069 5.119-0.155c0.677-0.087 0.694-0.726 0.694-1.608s-0.017-7.539 0.277-9.631c0.295-2.092 1.961-2.87 3.315-2.525 1.353 0.346 1.579 1.85 1.857 3.683s-0.242 7.037-0.26 7.608 0.070 2.23 0.383 2.352c0.313 0.122 5.050 0.018 5.744-0.017s0.937-0.121 1.041-0.588c0.105-0.466 0.105-9.578-0.052-11.74h-0.001l-0-0.001zM29.33 16.636c0.058 0.092 1.631 2.605 1.631 2.813s-0.023 0.715-0.081 0.657c-0.057-0.056-1.087-1.982-1.283-1.982s-0.451 0.404-0.37 0.565c0.081 0.162 1.562 2.398 1.573 2.57 0.012 0.174 0.035 1.223-0.023 1.13s-1.354-2.386-1.481-2.386-0.266 0.392-0.266 0.576c0 0.185 1.655 2.72 1.666 2.801 0.012 0.080 0 1.671-0.139 1.648s-0.625-0.83-1.052-1.74c-0.428-0.911-0.486-1.177-0.695-1.13-0.207 0.046-0.139 0.738-0.092 0.91 0.047 0.174 1.642 2.836 1.666 2.975 0.023 0.138 0.047 1.325-0.093 1.221-0.139-0.105-1.55-3.148-1.724-3.17-0.174-0.024-0.393 0.483-0.347 0.575s1.77 2.975 1.817 3.39 0 0.645-0.128 0.645c-0.127 0-0.185-0.080-0.243-0.195-0.058-0.116-1.62-2.767-1.7-2.779-0.081-0.012-0.325 0.484-0.232 0.634s1.504 2.237 1.423 2.26-0.671 0.023-0.74-0.023c-0.070-0.046-1.262-1.856-1.343-1.856-0.080 0-0.392 0.392-0.335 0.495 0.058 0.104 1.007 1.303 0.892 1.337s-0.567 0.046-0.637-0.023-0.764-1.325-0.938-1.313c-0.174 0.012-0.324 0.369-0.289 0.438s0.705 0.956 0.52 1.003c-0.185 0.046-0.763 0.080-0.763 0.012s0.302-2.282 0.325-4.173c0.023-1.89-0.115-3.908-0.325-5.199-0.207-1.291-0.346-2.525-1.26-3.032s-2.488-0.76-3.702-0.010c-1.215 0.75-1.655 1.567-1.84 1.832s-0.207 0.576-0.207 0.576-0.636-1.13-0.878-0.819c-0.243 0.311-0.266 0.508-0.174 0.588 0.093 0.080 0.775 0.657 0.798 0.899s0.081 1.43 0.023 1.43-0.868-1.591-1.053-1.499c-0.185 0.092-0.232 0.692-0.208 0.761s1.041 1.51 1.052 1.695c0.012 0.183 0 1.037-0.046 1.002s-1.145-1.994-1.25-1.948c-0.103 0.046-0.323 0.415-0.3 0.553s1.62 2.513 1.63 2.628c0.012 0.115 0 1.43-0.103 1.43s-1.387-2.605-1.48-2.605c-0.093 0-0.405 0.495-0.37 0.645 0.034 0.15 1.781 2.813 1.828 2.997s0.058 1.579 0 1.579-1.84-3.642-1.955-3.642c-0.115 0-0.44 0.473-0.417 0.518s1.92 3.32 1.92 3.47c0 0.15-0.046 0.184-0.046 0.184s-0.139 0.046-0.174-0.012c-0.035-0.058-1.538-2.502-1.678-2.537s-0.498 0.358-0.416 0.473 1.562 2.018 1.504 2.098c-0.058 0.080-0.729 0.046-0.798 0s-1.156-1.982-1.284-1.96c-0.127 0.023-0.44 0.473-0.417 0.53s1.065 1.465 1.053 1.499c-0.011 0.035-0.59 0.069-0.648 0.012-0.059-0.058-0.96-1.477-1.18-1.5s-0.359 0.462-0.29 0.519c0.070 0.057 0.845 1.072 0.705 1.072-0.138 0-1.156 0.070-1.18-0.185-0.022-0.253 0.197-5.186 0.185-6.823-0.010-1.637-0.172-8.645-0.091-9.026 0.017-0.080 3.251-0.011 3.795-0.023 0.543-0.011 0.89 0.011 0.936 0.080 0.047 0.070-0.023 2.698 0.162 2.79s0.683-0.403 0.834-0.53c0.15-0.127 0.88-0.784 2.534-1.556 1.655-0.773 3.91-0.934 5.055-0.68s2.384 0.611 3.205 1.706c0.822 1.095 1.4 2.029 1.55 2.616s0.15 1.107 0.070 1.084c-0.081-0.023-1.041-2.386-1.308-2.329-0.268 0.058-0.337 0.668-0.28 0.761h-0.002l-0.002-0.001zM16.281 13.489c-0.185-0.115-2.187-0.080-2.325-0.080-0.14 0-0.22 0.242-0.197 0.334 0 0-0.046 0.277 0.046 0.403s1.713 0.069 1.886 0.069c0.174 0 0.197 0.854 0.22 1.027s0.59 0.046 0.671 0.035c0.081-0.012 0.081-0.277 0.081-0.658s-0.197-1.015-0.383-1.131h-0zM22.933 14.469c-0.174 0.104-0.22 0.507 0.081 0.634s1.62 0.415 2.314 0.969c0.694 0.553 0.718 2.144 0.729 2.305s0.475 0.288 0.683 0.058c0.208-0.232 0.115-1.36-0.637-2.664-0.752-1.303-3.040-1.38-3.17-1.302l0 0.001z" />
    </svg>
  ),
  twitter: (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>twitter</title>
      <path d="M31.234 8.684c0 0 0.43-0.737 0.479-1.164s0.048-0.926-0.168-1.117-1.076 0.119-1.77 0.332c-0.694 0.214-2.081 0.428-2.081 0.428s-0.861-2.542-2.248-3.54c-1.387-0.998-3.229-1.021-4.783-0.665-1.555 0.357-3.468 1.355-4.354 2.4s-1.65 3.135-1.913 3.966c-0.264 0.832-0.79 2.28-1.388 2.399s-1.723-0.309-2.679-0.902c-0.957-0.594-3.445-2.613-4.689-3.753s-3.015-3.111-3.59-2.992c-0.574 0.119-1.244 2.185-1.244 3.658s1.315 2.898 1.315 2.898c-0.526 1.924-0.215 3.278 0.288 4.275s1.603 1.663 1.603 1.663c-0.143 0.665-0.072 1.474 0.168 2.186s1.483 1.615 1.483 1.615-0.742 0.595-1.913 0.927c-1.172 0.332-3.397-0.024-3.636 0.024s-0.024 3.017-0.024 3.445c0 0.427 0.311 0.76 0.694 1.045s3.468 1.828 7.798 2.945c4.33 1.116 7.726 0.142 10.31-0.974s5.358-4.537 7.152-7.293c1.794-2.755 2.99-6.722 2.99-6.722s0.67-0.357 1.627-1.069c0.957-0.713 1.315-1.924 1.34-2.66 0.025-0.738-0.765-1.355-0.765-1.355v-0.002zM29.081 10.275c0.287 0 1.507-0.688 1.65-0.57 0.144 0.12-0.358 1.045-1.244 1.569-0.885 0.523-1.555 0.784-1.723 0.736s-0.777-1.235-0.885-1.217-0.395 0.25-0.323 0.41c0.072 0.16 0.771 1.086 0.7 1.23-0.073 0.142-0.108 0.213-0.216 0.124s-0.771-1.498-0.951-1.533c-0.18-0.036-0.43 0.356-0.323 0.534s0.986 1.319 0.969 1.496-0.215 0.998-0.287 0.874c-0.072-0.125-1.166-2.138-1.274-2.12s-0.359 0.481-0.305 0.623 1.328 1.995 1.328 2.155c0 0.161-0.377 0.963-0.503 0.82-0.125-0.143-1.238-2.512-1.345-2.512-0.108 0-0.413 0.393-0.395 0.5s1.435 2.476 1.471 2.655c0.036 0.177-0.305 1.192-0.43 1.122-0.126-0.072-1.275-2.94-1.418-2.957s-0.359 0.41-0.305 0.588 1.4 2.726 1.418 2.94c0.019 0.213-0.215 0.587-0.286 0.534s-1.525-3.634-1.65-3.616c-0.126 0.018-0.341 0.374-0.216 0.784s1.596 3.082 1.615 3.296c0.017 0.214-0.36 0.712-0.413 0.623-0.055-0.089-1.597-3.492-1.74-3.456-0.144 0.035-0.341 0.57-0.216 0.784 0.125 0.215 1.705 2.975 1.705 3.065s-0.413 0.73-0.521 0.677c-0.108-0.053-1.435-3.207-1.579-3.189s-0.413 0.338-0.251 0.695 1.561 2.725 1.507 2.885c-0.054 0.16-0.43 0.695-0.503 0.57s-1.489-3.35-1.65-3.35-0.556 0.358-0.413 0.642c0.142 0.285 1.74 3.1 1.668 3.171s-0.628 0.802-0.718 0.748c-0.089-0.053-1.614-3.313-1.775-3.26-0.162 0.054-0.395 0.303-0.27 0.535 0.126 0.232 1.705 2.993 1.669 3.082s-0.43 0.445-0.538 0.32c-0.108-0.124-1.579-3.046-1.74-3.046-0.162 0-0.503 0.463-0.395 0.642 0.108 0.177 1.83 2.832 1.758 2.957s-0.61 0.588-0.681 0.499c-0.072-0.089-1.4-2.779-1.669-2.761s-0.466 0.427-0.341 0.57c0.125 0.142 1.471 2.405 1.471 2.405s-0.646 0.392-0.753 0.267c-0.107-0.125-1.201-2.602-1.308-2.602s-0.574 0.285-0.377 0.57c0.197 0.285 1.291 2.174 1.183 2.262s-0.448 0.25-0.556 0.125c-0.108-0.125-1.22-2.602-1.328-2.602s-0.538 0.177-0.431 0.356c0.107 0.178 1.256 2.494 1.202 2.53-0.054 0.035-0.771 0.25-0.861 0.16-0.090-0.088-1.059-2.155-1.22-2.155s-0.323 0.25-0.287 0.374c0.036 0.125 1.059 1.907 1.005 1.942-0.055 0.035-0.754 0.142-0.826 0.089s-0.986-2.192-1.13-2.227c-0.143-0.035-0.467 0.25-0.395 0.445 0.072 0.197 0.897 1.782 0.807 1.817s-0.7 0.072-0.79-0.053-0.825-1.853-0.987-1.889c-0.162-0.035-0.448 0.053-0.341 0.32s0.951 1.782 0.825 1.782c-0.126 0-0.807 0-0.879-0.053s-0.807-1.817-0.933-1.853c-0.125-0.035-0.537-0.071-0.466 0.16 0.072 0.233 0.86 1.587 0.717 1.587s-0.879-0.142-1.005-0.267c-0.125-0.125-0.789-1.747-0.932-1.764s-0.449 0.143-0.413 0.357 0.682 1.372 0.52 1.336c-0.16-0.035-0.896-0.16-0.915-0.25-0.017-0.088-0.735-1.585-0.86-1.657s-0.556 0.018-0.449 0.214c0.107 0.197 0.574 1.194 0.503 1.194s-1.758-0.498-3.157-1.211c-1.399-0.712-2.655-1.817-2.494-1.853s1.974 0.107 3.211-0.357c1.238-0.463 2.476-0.944 2.547-1.087s-0.144-0.463-0.197-0.481c-0.053-0.018-1.56-0.481-1.883-1.568s-0.072-2.262-0.269-2.405c-0.197-0.143-1.202-0.57-1.705-2.12s0.055-3.652-0.054-3.795c-0.107-0.142-0.281-0.433-0.455-0.385-0.18 0.049-0.765-1.165-0.789-2.305s0.478-2.66 0.598-2.66c0.12 0 3.325 3.088 5.024 4.514s3.684 2.898 4.856 3.088c1.172 0.19 1.65 0.238 2.2-0.879s1.149-3.848 1.986-5.107c0.837-1.259 2.56-2.684 4.784-3.040s3.899 0.261 4.784 1.496c0.885 1.235 0.933 2.85 1.148 2.992s1.171 0.095 2.32-0.309c1.148-0.404 1.555-0.499 1.626-0.499s-0.263 0.736-1.005 1.354c-0.741 0.617-1.267 1.045-1.267 1.33s0.145 0.498 0.432 0.498l0.001-0.001v0.001zM3.055 8.192c-0.341-0.267-0.198-0.909-0.107-1.372s-0.646-0.357-0.772 0.16c-0.125 0.516 0.018 1.23 0.43 1.585 0.413 0.357 0.8 0.335 0.915 0.25 0.144-0.107-0.125-0.356-0.466-0.623v0.001zM13.12 13.27c-0.269-0.035-0.933 0.32-1.633-0.035-0.7-0.357-1.382-1.194-1.687-1.087-0.214 0.075-0.43 0.357 0.090 0.838s1.489 0.89 2.278 0.89c0.79 0 1.22-0.57 0.951-0.606v0.001zM18.035 6.981c-0.179-0.053-0.933 0.445-1.291 1.070-0.359 0.623-0.897 1.816-0.485 2.049 0.277 0.155 0.413-0.035 0.628-0.713s0.628-1.46 0.861-1.745c0.233-0.286 0.466-0.607 0.287-0.66l-0-0.001z" />
    </svg>
  ),
};

const Social = ({ label, url, svg }) => (
  <a className="color2 flex flex-column items-center" href={url}>
    <div style={{ width: "32px", height: "32px" }}>{svg}</div>
    <div className="pt2">{label}</div>
  </a>
);

const About = () => {
  return (
    <div id="About" className="About">
      <div className="mw8 ph4 ph0-l center cb mt2 pt6">
        <h2 className="f1 secondary ">About</h2>
        <p className="f3 center mw7 tc" style={{ lineHeight: "4rem" }}>
          I'm a Software Developer specialized in Full Stack Javascript; from
          Node to Angular/React with a project management background and passion
          for great UX design, leading teams from design to deployment through
          agile methodologies.
        </p>
        <p className="f3 center mw7 tc" style={{ lineHeight: "4rem" }}>
          I also love traveling,{" "}
          <span>
            <a className="color2" href="https://www.instagram.com/sigrone/">
              photography
            </a>
          </span>{" "}
          and running.
        </p>
        <div className="mw6 center cb pv4">
          <ul className="flex list justify-between">
            <li>
              <Social
                url="https://github.com/giocodes"
                label="Github"
                svg={icons.github}
              />
            </li>
            <li>
              <Social
                url="https://www.linkedin.com/in/sergioigomez/"
                label="Linkedin"
                svg={icons.linkedin}
              />
            </li>
            <li>
              <Social
                url="https://twitter.com/Sigrone"
                label="Twitter"
                svg={icons.twitter}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
