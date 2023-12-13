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
import { theme } from '../theme';

const Icon = (props: IconProps) => {
 if (props.type === types.icon.eye) return <HiEye size={0} color={theme.gray} />;
 if (props.type === types.icon.hidde) return <HiX size={0} color={theme.gray} />;
 if (props.type === types.icon.view) return <HiPlus size={0} color={theme.gray} />;
 if (props.type === types.icon.default) return <HiX size={0} color={theme.gray} />;
 if (props.type === types.icon.edit) return <HiPencil size={30} color={theme.gray} />;
 if (props.type === types.icon.enable) return <HiCheck size={30} color={theme.gray} />;
 if (props.type === types.icon.elimited) return <HiTrash size={30} color={theme.red} />;
 if (props.type === types.icon.XCircle) return <HiXCircle size={50} color={theme.gray} />;
 if (props.type === types.icon.refresh) return <HiRefresh size={30} color={theme.gray} />;
 if (props.type === types.icon.create) return <HiPlusCircle size={0} color={theme.gray} />;
 if (props.type === types.icon.EyeSlashIcon) return <HiEyeOff size={0} color={theme.gray} />;
 if (props.type === types.icon.MagnifyingGlassIcon) return <HiSearch size={0} color={theme.gray} />;
 if (props.type === types.icon.arrowLeft)
  return <HiOutlineArrowCircleLeft size={0} color={theme.gray} />;
 if (props.type === types.icon.HiInformationCircle)
  return <HiInformationCircle size={30} color={theme.gray} />;
 return null;
};

export { Icon };
