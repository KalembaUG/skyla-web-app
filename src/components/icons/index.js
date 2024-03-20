import React from 'react';

export const LocationIcon = ({className=''}) => {
    return (
        <div>
              <svg className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 10c0 5.091-5.924 11.073-6.175 11.325a1.165 1.165 0 0 1-1.65 0C10.922 21.073 5 15.091 5 10c0-3.86 3.14-7 7-7s7 3.14 7 7zm-7 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
  </svg>
        </div>
    );
}

export const CalendarStartIcon = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} >
        <script />
        <path
          fillRule="evenodd"
          d="M21 4v15c0 1.11-.893 2-1.995 2H4.995A1.997 1.997 0 0 1 3 19V4zM4.995 8.001h.002L5 8zm14.005 0v11H5V8zm0 0h.005zm-14 11h-.005zm14 0h.005-.002q-.002.002-.003 0M7 14v-4h4v4z"
          clipRule="evenodd"
        />
      </svg>
    )
}

export const CalendarEndIcon = ({ className = '' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className}><path fill-rule="evenodd" d="M21 4v15c0 1.11-.893 2-1.995 2H4.995A1.997 1.997 0 0 1 3 19V4zM4.995 8.001h.002L5 8zm14.005 0v11H5V8zm0 0h.005zm-14 11h-.005zm14 0h.005-.002q-.002.002-.003 0M13 17v-4h4v4z" clip-rule="evenodd"/></svg>
    )
}


