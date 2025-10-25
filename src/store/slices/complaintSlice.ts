import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Complaint } from '../types';

export const fetchComplaints = createAsyncThunk(
  'complaints/fetchComplaints',
  async (params: { userId?: string; status?: string }, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      return [];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createComplaint = createAsyncThunk(
  'complaints/createComplaint',
  async (complaintData: Partial<Complaint>, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      return complaintData as Complaint;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ComplaintsState {
  list: Complaint[];
  selectedComplaint: Complaint | null;
  loading: boolean;
  error: string | null;
}

const initialState: ComplaintsState = {
  list: [],
  selectedComplaint: null,
  loading: false,
  error: null,
};

const complaintSlice = createSlice({
  name: 'complaints',
  initialState,
  reducers: {
    selectComplaint: (state, action) => {
      state.selectedComplaint = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setComplaints: (state, action) => {
      state.list = action.payload;
    },
    addComplaint: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComplaints.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComplaints.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchComplaints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createComplaint.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createComplaint.fulfilled, (state, action) => {
        state.loading = false;
        state.list.unshift(action.payload);
      })
      .addCase(createComplaint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectComplaint, clearError, setComplaints, addComplaint } =
  complaintSlice.actions;
export default complaintSlice.reducer;
