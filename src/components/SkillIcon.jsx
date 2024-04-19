import React from 'react';

export default function SkillIcon({ data, replace_background_color = null, replace_foreground_color = null, ...props }) {

    let {
        name,
        svgContent,
        backgroundColor,
        foregroundColors
    } = data;

    if (replace_background_color !== null) {
        backgroundColor.forEach(bc => {
            svgContent = svgContent.replaceAll(bc, replace_background_color);
        });
    }

    if (replace_foreground_color !== null) {
        foregroundColors.forEach(fc => {
            svgContent = svgContent.replaceAll(fc, replace_foreground_color);
        });
    }


    return (
        <div className='w-1/3 md:w-1/4'>
            <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' dangerouslySetInnerHTML={{ __html: svgContent }}>
            </svg>
            <p className='font-bold text-slate-600 text-center md:text-xl'>
                {name}
            </p>
        </div>
    );
}