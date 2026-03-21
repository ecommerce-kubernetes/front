import z from "zod";

const passwordRegex = new RegExp(
  "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-={}:;\"'<>?,./]).{8,}$",
);

const nameRegex = new RegExp("^[가-힣a-zA-Z\s'-]+$");

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "이메일을 입력해주세요")
      .email("올바른 이메일 형식을 입력해주세요"),
    password: z
      .string()
      .min(1, "비밀번호를 입력해주세요")
      .regex(
        passwordRegex,
        "비밀번호는 최소 8자 이상이며, 영문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다",
      ),
    passwordConfirm: z.string().min(1, "비밀번호 확인을 입력해주세요"),
    gender: z.enum(["MALE", "FEMALE"] as const, {
      message: "성별을 선택해주세요",
    }),

    birthDate: z.object({
      year: z.string().length(4, "연도 4자리를 입력해주세요"),
      month: z
        .string()
        .min(1, "월을 입력해주세요")
        .max(2, "올바른 월을 입력해주세요"),
      day: z
        .string()
        .min(1, "일을 입력해주세요")
        .max(2, "올바른 일을 입력해주세요"),
    }),
    name: z
      .string()
      .min(1, "이름을 입력해주세요")
      .min(2, "이름을 2자 이상 입력해주세요")
      .max(20, "이름은 20자를 초과할 수 없습니다")
      .regex(
        nameRegex,
        "이름에는 한글, 영문, 띄어쓰기, (-), (')만 사용할 수 있습니다",
      ),
    phoneNumber: z.string().min(1, "전화번호를 입력해주세요"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호가 일치하지 않습니다",
  })
  .superRefine((data, ctx) => {
    const { year, month, day } = data.birthDate;

    if (year.length === 4 && month && day) {
      const y = parseInt(year);
      const m = parseInt(month);
      const d = parseInt(day);

      const date = new Date(y, m - 1, d);
      const today = new Date();

      if (
        date.getFullYear() !== y ||
        date.getMonth() + 1 !== m ||
        date.getDate() !== d ||
        date > today
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "유효하지 않은 생년월일 입니다",
          path: ["birthDate", "day"],
        });
      }
    }
  });

export type SignupFormType = z.infer<typeof signupSchema>;
