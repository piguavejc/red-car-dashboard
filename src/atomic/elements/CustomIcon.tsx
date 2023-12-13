import React from 'react';
import { IconProps } from '@/types';
import { types } from '@/constants';
import {
 HiTrash,
 HiCheck,
 HiPencil,
 HiRefresh,
 HiXCircle,
 HiPlusCircle,
 HiInformationCircle,
} from 'react-icons/hi';
import { theme } from '../theme';

const CustomIcon = (props: IconProps) => {
 if (props.type === types.icon.edit) return <HiPencil size={30} color={theme.gray} />;
 if (props.type === types.icon.enable) return <HiCheck size={30} color={theme.gray} />;
 if (props.type === types.icon.elimited) return <HiTrash size={30} color={theme.red} />;
 if (props.type === types.icon.close) return <HiXCircle size={50} color={theme.gray} />;
 if (props.type === types.icon.refresh) return <HiRefresh size={30} color={theme.gray} />;
 if (props.type === types.icon.create) return <HiPlusCircle size={0} color={theme.gray} />;
 if (props.type === types.icon.detail) return <HiInformationCircle size={30} color={theme.gray} />;
 return null;
};

export { CustomIcon };
