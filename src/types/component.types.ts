import { AnyObjectSchema } from 'yup';
import {
 CategoryDto,
 CategoryModel,
 LaboratoryModel,
 ProductDto,
 ProductModel,
} from '@/mvc/models';
import {
 Item,
 Search,
 Message,
 statusIcon,
 statusForm,
 statusButton,
 ModalSetting,
 dialogSetting,
 variantButton,
} from './common.types';

/*  */
interface CustomSelectProps {
 isRequeried?: boolean;
 label: string;
 value: string | undefined;
 data: Item[];
 id: string;
 handlerChange: (value: string) => void;
}
interface CustomProgressBarProps {
 items: number[];
 posiition: number;
 handlerItem: (position: number) => void;
}
interface CustomListProps {
 data: Item[];
 isLoading: boolean;
 handlerEdit?: (id: number, name: string) => void;
 handlerDelete?: (id: number, name: string) => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerDetail?: (id: number) => void;
}
interface CustomHeaderProps {
 list: string[];
 target: number;
 hanlderTarget: (target: number) => void;
}
interface CustomDetailsCategoryProps {
 isLoading: boolean;
 data: CategoryDto;
 handlerClose?: () => void;
}
interface CustomDetailsProductProps {
 isLoading: boolean;
 data: ProductDto;
 handlerClose?: () => void;
}
interface CustomTabsProps {
 items: string[];
 isLoading?: boolean;
 className?: string;
 itemFocus: string;
 returnItem: (item: string) => void;
}
interface CustomItemTabsProps {
 isActive: boolean;
 item: string;
 returnItem: (item: string) => void;
}
/*  */
interface CustomItemProps {
 text: string;
 title: string;
 className?: string;
}
/*  */
interface PosterProps {
 id: string;
 label: string;
 type: statusForm;
 urlImage: string;
 disabled?: boolean;
 value: File | undefined;
 messageError: string | undefined;
 validation: boolean | undefined | '';
 handlerChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}
interface CustomCategoryFormProps {
 isLoading: boolean;
 entity: CategoryModel;
 type: statusForm;
 handlerSubmit: (values: CategoryModel) => void;
 validationSchema: AnyObjectSchema;
}
interface CustomProductFormProps {
 isLoading: boolean;
 type: statusForm;
 entity: ProductModel;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: ProductModel) => void;
}
interface CustomSearchFormProps {
 entity: Search;
 placeholder: string;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: { search: string }) => void;
}

interface CustomLaboratoryFormProps {
 isLoading: boolean;
 entity: LaboratoryModel;
 type: statusForm;
 handlerSubmit: (values: LaboratoryModel) => void;
 validationSchema: AnyObjectSchema;
}

interface CustomButtonIconProps {
 type:
  | 'view'
  | 'edit'
  | 'hidde'
  | 'expand'
  | 'default'
  | 'refresh'
  | 'disabled'
  | 'arrow-left'
  | 'eliminated'
  | 'eye';
 className?: string;
 text?: string;
 handlerPress?: () => void;
}

interface IconProps {
 type: statusIcon;
}
interface CustomDialogProps {
 setting: dialogSetting;
}

interface CustomButtonProps {
 title: string;
 text?: string;
 icon?: statusIcon;
 type: statusButton;
 className?: string;
 isDisable?: boolean;
 variant?: variantButton;
 handlerPress?: () => void;
}
interface CustomTextAreaProps {
 id: string;
 label?: string;
 isDisable: boolean;
 placeholder: string;
 isRequeried?: boolean;
 value: string | undefined;
 validation: boolean | undefined | '';
 messageError: string | undefined;
 handlerChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
}
interface CustomInputProps {
 id: string;
 label?: string;
 isDisable: boolean;
 placeholder: string;
 isRequeried?: boolean;
 value: string | undefined;
 validation: boolean | undefined | '';
 messageError: string | undefined;
 handlerChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}
interface CustomPhotoProps {
 className?: string;
 title: string;
 src: string;
 width: number;
 height: number;
}
interface CustomModalProps {
 setting: ModalSetting;
}
export type {
 CustomDetailsCategoryProps,
 CustomLaboratoryFormProps,
 CustomDetailsProductProps,
 CustomCategoryFormProps,
 CustomProductFormProps,
 CustomProgressBarProps,
 CustomSearchFormProps,
 CustomButtonIconProps,
 CustomTextAreaProps,
 CustomItemTabsProps,
 CustomDialogProps,
 CustomButtonProps,
 CustomHeaderProps,
 CustomInputProps,
 CustomSelectProps,
 CustomPhotoProps,
 CustomModalProps,
 CustomTabsProps,
 CustomListProps,
 CustomItemProps,
 PosterProps,
 IconProps,
};
