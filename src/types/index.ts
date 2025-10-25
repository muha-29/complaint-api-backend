import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export type RootStackParamList = {
  Auth: undefined;
  CitizenRoot: undefined;
  AdminRoot: undefined;
  ComplaintDetail: { complaintId: string };
};

export type CitizenTabParamList = {
  ComplaintsList: undefined;
  CreateComplaint: undefined;
  Profile: undefined;
};

export type AdminTabParamList = {
  Dashboard: undefined;
  AdminComplaints: { filter?: string };
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type CitizenTabScreenProps<T extends keyof CitizenTabParamList> =
  BottomTabScreenProps<CitizenTabParamList, T>;

export type AdminTabScreenProps<T extends keyof AdminTabParamList> =
  BottomTabScreenProps<AdminTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
