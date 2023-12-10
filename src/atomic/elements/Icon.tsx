import React from 'react';
import { IconProps } from '@/types';
import { types } from '@/constants';
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
 if (type === types.icon.default) return <HiX size={size} color={color} />;
 if (type === types.icon.enable) return <HiCheck size={size} color={color} />;
 if (type === types.icon.elimited) return <HiTrash size={size} color={color} />;
 if (type === types.icon.view) return <HiPlus size={size} color={color} />;
 if (type === types.icon.hidde) return <HiX size={size} color={color} />;
 if (type === types.icon.arrowLeft) return <HiOutlineArrowCircleLeft size={size} color={color} />;
 if (type === types.icon.refresh) return <HiRefresh size={size} color={color} />;
 if (type === types.icon.eye) return <HiEye size={size} color={color} />;
 if (type === types.icon.edit) return <HiPencil size={size} color={color} />;
 if (type === types.icon.create) return <HiPlusCircle size={size} color={color} />;
 if (type === types.icon.EyeSlashIcon) return <HiEyeOff size={size} color={color} />;
 if (type === types.icon.MagnifyingGlassIcon) return <HiSearch size={size} color={color} />;
 if (type === types.icon.XCircle) return <HiXCircle size={size} color={color} />;
 if (type === types.icon.HiInformationCircle)
  return <HiInformationCircle size={size} color={color} />;
 return null;
};

export { Icon };
