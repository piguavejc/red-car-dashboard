import React from 'react';
import { IconProps } from '@/types';
import { typesIcon } from '@/constants';
import {
 HiX,
 HiEye,
 HiPlus,
 HiTrash,
 HiCheck,
 HiPencil,
 HiEyeOff,
 HiSearch,
 HiRefresh,
 HiXCircle,
 HiPlusCircle,
 HiInformationCircle,
 HiOutlineArrowCircleLeft,
} from 'react-icons/hi';

const Icon = (props: IconProps) => {
 const { type, color, size, strokeWidth } = props;
 if (type === typesIcon.default) return <HiX size={size} color={color} />;
 if (type === typesIcon.enable) return <HiCheck size={size} color={color} />;
 if (type === typesIcon.elimited) return <HiTrash size={size} color={color} />;
 if (type === typesIcon.view) return <HiPlus size={size} color={color} />;
 if (type === typesIcon.hidde) return <HiX size={size} color={color} />;
 if (type === typesIcon.arrowLeft) return <HiOutlineArrowCircleLeft size={size} color={color} />;
 if (type === typesIcon.refresh) return <HiRefresh size={size} color={color} />;
 if (type === typesIcon.eye) return <HiEye size={size} color={color} />;
 if (type === typesIcon.edit) return <HiPencil size={size} color={color} />;
 if (type === typesIcon.create) return <HiPlusCircle size={size} color={color} />;
 if (type === typesIcon.EyeSlashIcon) return <HiEyeOff size={size} color={color} />;
 if (type === typesIcon.MagnifyingGlassIcon) return <HiSearch size={size} color={color} />;
 if (type === typesIcon.XCircle) return <HiXCircle size={size} color={color} />;
 if (type === typesIcon.HiInformationCircle)
  return <HiInformationCircle size={size} color={color} />;
 return null;
};

export { Icon };
