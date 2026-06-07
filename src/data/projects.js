import l1Image1 from "../assets/images/L1/Screenshot 2026-06-07 163823.png";
import l1Image2 from "../assets/images/L1/Screenshot 2026-06-07 163923.png";
import l1Image3 from "../assets/images/L1/Screenshot 2026-06-07 163955.png";
import l1Image4 from "../assets/images/L1/Screenshot 2026-06-07 164029.png";
import l1Image5 from "../assets/images/L1/Screenshot 2026-06-07 164043.png";
import l1Image6 from "../assets/images/L1/Screenshot 2026-06-07 164103.png";
import l1Image7 from "../assets/images/L1/Screenshot 2026-06-07 164120.png";
import l3Image from "../assets/images/L3/image.png";

export const projects = [
  {
    id: "may-tinh-thiet-bi-ngoai-vi",
    title: "Bài 1 - Máy tính và thiết bị ngoại vi",
    description: "Báo cáo thực hành thao tác với tệp tin và thư mục trên Windows.",
    image: l1Image1,
    reportTitle:
      "BÁO CÁO THỰC HÀNH THAO TÁC VỚI TỆP TIN VÀ THƯ MỤC TRÊN WINDOWS",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "Lớp", value: "........................................" },
      { label: "MSSV", value: "........................................" },
      { label: "Ngày thực hiện", value: "........................................" },
    ],
    sections: [
      {
        heading: "1. Mở File Explorer",
        paragraphs: [
          "Đầu tiên, tôi nhấn tổ hợp phím Windows + E để mở cửa sổ File Explorer. Đây là công cụ quản lý tệp và thư mục mặc định của hệ điều hành Windows.",
        ],
        figure: "Hình 1: Mở File Explorer.",
        image: l1Image1,
      },
      {
        heading: "2. Truy cập thư mục làm việc",
        paragraphs: [
          "Tại File Explorer, tôi chọn mục This PC ở thanh điều hướng bên trái. Sau đó truy cập vào ổ đĩa D: để thực hiện bài thực hành. Trong trường hợp máy tính chỉ có ổ C:, có thể sử dụng thư mục Documents thay thế.",
        ],
        figure: "Hình 2: Truy cập ổ đĩa làm việc.",
        image: l1Image2,
      },
      {
        heading: "3. Tạo thư mục mới",
        paragraphs: [
          "Tôi nhấp chuột phải vào vùng trống trong ổ đĩa, chọn New → Folder và đặt tên thư mục là ThucHanh_NguyenDucDuy.",
          "Sau khi nhấn Enter, thư mục mới được tạo thành công.",
        ],
        figure: "Hình 3: Tạo thư mục ThucHanh_NguyenDucDuy.",
        image: l1Image3,
      },
      {
        heading: "4. Tạo tệp văn bản",
        paragraphs: [
          "Tôi mở thư mục ThucHanh_NguyenDucDuy, sau đó nhấp chuột phải vào khoảng trống và chọn New → Text Document.",
          "Tệp văn bản mới được tạo với tên GhiChu.txt.",
        ],
        figure: "Hình 4: Tạo tệp GhiChu.txt.",
        image: l1Image4,
      },
      {
        heading: "5. Đổi tên tệp tin",
        paragraphs: [
          "Tôi nhấp chuột phải vào tệp GhiChu.txt, chọn Rename và đổi tên thành GhiChuQuanTrong.txt.",
          "Sau khi nhấn Enter, tên tệp được cập nhật thành công.",
        ],
        figure: "Hình 5: Đổi tên tệp thành GhiChuQuanTrong.txt.",
        image: l1Image5,
      },
      {
        heading: "6. Tạo thư mục con",
        paragraphs: [
          "Trong thư mục ThucHanh_NguyenDucDuy, tôi tiếp tục tạo một thư mục mới bằng cách chọn New → Folder và đặt tên là TaiLieu.",
          "Thư mục này sẽ được sử dụng để lưu trữ các tệp được sao chép và di chuyển ở các bước tiếp theo.",
        ],
        figure: "Hình 6: Tạo thư mục TaiLieu.",
        image: l1Image6,
      },
      {
        heading: "7. Sao chép tệp tin bằng Copy và Paste",
        paragraphs: [
          "Tôi chọn tệp GhiChuQuanTrong.txt và nhấn tổ hợp phím Ctrl + C để sao chép.",
          "Tiếp theo, tôi mở thư mục TaiLieu và nhấn Ctrl + V để dán tệp vào thư mục này.",
          "Kết quả là tệp xuất hiện ở cả thư mục gốc và thư mục TaiLieu, chứng tỏ thao tác sao chép đã thành công.",
        ],
        figure: "Hình 7: Thực hiện Copy và Paste tệp tin.",
        image: l1Image7,
      },
      {
        heading: "8. Di chuyển tệp tin bằng Cut và Paste",
        paragraphs: [
          "Tôi quay trở lại thư mục ThucHanh_NguyenDucDuy và tạo một tệp văn bản mới có tên DiChuyen.txt.",
          "Sau đó, tôi chọn tệp này và nhấn Ctrl + X để cắt tệp.",
          "Tiếp theo, tôi mở thư mục TaiLieu và nhấn Ctrl + V để dán.",
          "Kết quả cho thấy tệp không còn ở vị trí cũ mà chỉ xuất hiện trong thư mục TaiLieu, chứng tỏ thao tác di chuyển đã thành công.",
        ],
        figure: "Hình 8: Thực hiện Cut và Paste tệp tin.",
      },
      {
        heading: "9. Xóa tệp tin vào Thùng rác",
        paragraphs: [
          "Trong thư mục TaiLieu, tôi chọn tệp GhiChuQuanTrong.txt và nhấn phím Delete.",
          "Tệp được chuyển vào Recycle Bin (Thùng rác) và có thể khôi phục lại nếu cần.",
        ],
        figure: "Hình 9: Xóa tệp vào Recycle Bin.",
      },
      {
        heading: "10. Xóa vĩnh viễn tệp tin",
        paragraphs: [
          "Tôi chọn tệp DiChuyen.txt trong thư mục TaiLieu.",
          "Tiếp theo, tôi nhấn tổ hợp phím Shift + Delete và xác nhận thao tác khi hệ thống hiển thị hộp thoại cảnh báo.",
          "Kết quả là tệp bị xóa hoàn toàn khỏi máy tính và không xuất hiện trong Recycle Bin.",
        ],
        figure: "Hình 10: Xóa vĩnh viễn bằng Shift + Delete.",
      },
      {
        heading: "11. Khôi phục tệp từ Recycle Bin",
        paragraphs: [
          "Tôi mở Recycle Bin trên màn hình Desktop và tìm tệp GhiChuQuanTrong.txt đã xóa trước đó.",
          "Sau khi nhấp chuột phải vào tệp và chọn Restore, tệp được khôi phục trở lại vị trí ban đầu trong thư mục TaiLieu.",
        ],
        figure: "Hình 11: Khôi phục tệp từ Recycle Bin.",
      },
    ],
    conclusion:
      "Qua bài thực hành này, tôi đã thực hiện thành công các thao tác quản lý tệp và thư mục trên hệ điều hành Windows, bao gồm tạo thư mục, tạo tệp tin, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu. Bài thực hành giúp tôi hiểu rõ sự khác nhau giữa các thao tác Copy, Cut, Delete và Shift + Delete, đồng thời nâng cao kỹ năng sử dụng File Explorer trong công việc và học tập.",
    content: [
      "Thực hành mở File Explorer, tạo thư mục, tạo tệp tin và đổi tên tệp.",
      "Thực hiện thao tác Copy, Cut, Delete, Shift + Delete và khôi phục từ Recycle Bin.",
    ],
    skills: ["Quản lý tệp", "Tổ chức thư mục", "File Explorer", "Sao chép và di chuyển dữ liệu"],
  },
  {
    id: "khai-thac-du-lieu",
    title: "Bài 2 - Khai thác dữ liệu",
    description: "Tìm kiếm và đánh giá nguồn thông tin học thuật về ứng dụng AI trong phát triển phần mềm.",
    image: "https://picsum.photos/600/400?2",
    reportTitle: "BÁO CÁO TÌM KIẾM VÀ ĐÁNH GIÁ THÔNG TIN HỌC THUẬT",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "Lớp", value: "........................................" },
      { label: "MSSV", value: "........................................" },
      { label: "Ngày thực hiện", value: "........................................" },
    ],
    sections: [
      {
        heading: "1. Giới thiệu",
        paragraphs: [
          "Trí tuệ nhân tạo (Artificial Intelligence - AI) đang trở thành một trong những công nghệ quan trọng nhất trong lĩnh vực Công nghệ Thông tin.",
          "AI được ứng dụng rộng rãi trong phát triển phần mềm nhằm tự động hóa quy trình lập trình, kiểm thử, phát hiện lỗi và hỗ trợ ra quyết định.",
          "Mục tiêu của báo cáo là tìm kiếm, thu thập và đánh giá các nguồn thông tin học thuật liên quan đến ứng dụng AI trong phát triển phần mềm từ nhiều nguồn khác nhau để xác định mức độ tin cậy và giá trị tham khảo của từng nguồn.",
        ],
        figure: "Hình 1: Tổng quan về ứng dụng AI trong phát triển phần mềm.",
      },
      {
        heading: "2. Phạm vi tìm kiếm",
        paragraphs: [
          "Các từ khóa được sử dụng gồm: Artificial Intelligence in Software Engineering, AI-assisted Software Development, Machine Learning for Software Engineering, AI Code Generation và Intelligent Software Testing.",
          "Các nguồn tìm kiếm bao gồm Google Scholar, IEEE Xplore, ACM Digital Library, SpringerLink, Elsevier ScienceDirect, sách chuyên khảo và các nguồn mở trên Internet.",
        ],
        figure: "Hình 2: Các từ khóa và nguồn tìm kiếm chính.",
      },
      {
        heading: "3. Kết quả tìm kiếm và đánh giá nguồn thông tin",
        paragraphs: [
          "Các tài liệu được lựa chọn có nguồn gốc từ bài báo khoa học, tạp chí học thuật, sách chuyên khảo và tài liệu chính thức của các tổ chức uy tín.",
          "Những nguồn này được đánh giá ở mức rất cao hoặc cao về độ tin cậy vì có tác giả chuyên môn, cơ quan xuất bản uy tín và phương pháp nghiên cứu rõ ràng.",
          "Các tài liệu như bài báo IEEE, ACM, Springer và sách chuyên khảo nổi tiếng là nền tảng phù hợp cho tham khảo học thuật và nghiên cứu chuyên sâu.",
        ],
        figure: "Hình 3: Kết quả tìm kiếm và mức độ tin cậy của các tài liệu.",
      },
      {
        heading: "4. Đánh giá độ tin cậy của các nguồn",
        paragraphs: [
          "Tiêu chí đầu tiên là tác giả: các bài báo được công bố bởi các nhà nghiên cứu có chuyên môn trong lĩnh vực AI và kỹ nghệ phần mềm.",
          "Tiêu chí thứ hai là cơ quan xuất bản: IEEE, ACM, Springer, Elsevier và Pearson đều là những tổ chức xuất bản học thuật uy tín.",
          "Tiêu chí thứ ba là phương pháp nghiên cứu: các bài báo khoa học mô tả rõ mục tiêu, dữ liệu thực nghiệm, phương pháp đánh giá và kết quả đạt được.",
          "Tiêu chí thứ tư là số lượng trích dẫn: các tài liệu được lựa chọn đều có số lượng trích dẫn cao trên Google Scholar, phản ánh mức độ ảnh hưởng và sự công nhận của cộng đồng học thuật.",
          "Tiêu chí cuối cùng là tính cập nhật: phần lớn tài liệu được công bố trong giai đoạn 2021–2024, nên phản ánh tốt xu hướng mới nhất về AI trong phát triển phần mềm.",
        ],
        figure: "Hình 4: Các tiêu chí đánh giá độ tin cậy của nguồn thông tin.",
      },
      {
        heading: "5. Bảng xếp hạng độ tin cậy",
        paragraphs: [
          "Mức độ rất cao: bài báo IEEE, ACM, Springer và các sách chuyên khảo nổi tiếng.",
          "Mức độ cao: blog nghiên cứu chính thức, tài liệu kỹ thuật của doanh nghiệp và nguồn mở chính thống.",
          "Mức độ trung bình: bài viết tổng hợp trên Internet có độ tin cậy cần kiểm chứng thêm.",
          "Mức độ thấp: blog cá nhân, diễn đàn không có phản biện khoa học.",
        ],
        figure: "Hình 5: Bảng xếp hạng độ tin cậy của các nguồn tham khảo.",
      },
    ],
    conclusion:
      "Qua quá trình tìm kiếm và đánh giá nguồn thông tin, có thể thấy các cơ sở dữ liệu học thuật như IEEE Xplore, ACM Digital Library, SpringerLink và Google Scholar cung cấp những tài liệu có độ tin cậy cao nhất. Các bài báo khoa học và sách chuyên khảo là nguồn tham khảo phù hợp cho nghiên cứu học thuật. Trong khi đó, các nguồn mở trên Internet có thể hỗ trợ cập nhật xu hướng công nghệ nhưng cần được kiểm chứng trước khi sử dụng.",
    content: [
      "Tìm kiếm tài liệu học thuật về AI trong phát triển phần mềm.",
      "Đánh giá độ tin cậy theo tác giả, cơ quan xuất bản, phương pháp nghiên cứu và số lượng trích dẫn.",
      "Tổng hợp kết quả thành báo cáo phục vụ học tập và nghiên cứu.",
    ],
    skills: ["Tìm kiếm học thuật", "Đánh giá nguồn", "Phân tích tài liệu", "AI trong phát triển phần mềm"],
  },
  {
    id: "tri-tue-nhan-tao",
    title: "Bài 3 - Trí tuệ nhân tạo",
    description: "Thiết kế và đánh giá prompt cho học tập bằng AI.",
    image: l3Image,
    reportTitle: "CÁC BƯỚC THỰC HIỆN BÀI TẬP: THIẾT KẾ VÀ ĐÁNH GIÁ PROMPT CHO HỌC TẬP",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "Lớp", value: "........................................" },
      { label: "MSSV", value: "........................................" },
      { label: "Ngày thực hiện", value: "........................................" },
    ],
    sections: [
      {
        heading: "Bước 1: Chọn 3 tác vụ học tập",
        paragraphs: [
          "Lựa chọn ba tác vụ học tập phổ biến theo yêu cầu đề bài: tóm tắt tài liệu, giải thích khái niệm phức tạp và tạo bộ câu hỏi ôn tập.",
          "Đây là các tác vụ phù hợp để thử nghiệm sự khác biệt giữa prompt cơ bản, prompt cải tiến và prompt nâng cao.",
        ],
        figure: "Hình 1: Lựa chọn các tác vụ học tập.",
        image: l3Image,
      },
      {
        heading: "Bước 2: Xây dựng Prompt cho tác vụ 1 - Tóm tắt tài liệu",
        paragraphs: [
          'Prompt cơ bản: “Tóm tắt tài liệu về Trí tuệ nhân tạo dưới đây.”',
          'Prompt cải tiến: “Hãy tóm tắt tài liệu về Trí tuệ nhân tạo trong khoảng 200 từ. Trình bày theo các mục: nội dung chính, kết quả nổi bật và kết luận.”',
          'Prompt nâng cao: “Bạn là một giảng viên đại học chuyên ngành Công nghệ Thông tin. Hãy đọc tài liệu sau và thực hiện các bước: xác định chủ đề chính, trích xuất các ý quan trọng nhất, tóm tắt nội dung trong khoảng 150–200 từ và liệt kê 3 kiến thức quan trọng mà sinh viên cần ghi nhớ.”',
        ],
        figure: "Hình 2: Kết quả Prompt cơ bản, cải tiến và nâng cao cho tác vụ tóm tắt.",
      },
      {
        heading: "Bước 3: Xây dựng Prompt cho tác vụ 2 - Giải thích khái niệm phức tạp",
        paragraphs: [
          "Chủ đề được chọn là Machine Learning.",
          'Prompt cơ bản: “Giải thích Machine Learning.”',
          'Prompt cải tiến: “Hãy giải thích Machine Learning cho sinh viên năm nhất ngành Công nghệ Thông tin. Trình bày khái niệm, nguyên lý hoạt động và ví dụ thực tế.”',
          'Prompt nâng cao: “Bạn là giảng viên môn Trí tuệ nhân tạo. Hãy giải thích Machine Learning theo trình tự: định nghĩa, cách hoạt động, ví dụ thực tế, so sánh với lập trình truyền thống, và những ứng dụng phổ biến hiện nay.”',
        ],
        figure: "Hình 5: So sánh kết quả giải thích Machine Learning.",
      },
      {
        heading: "Bước 4: Xây dựng Prompt cho tác vụ 3 - Tạo câu hỏi ôn tập",
        paragraphs: [
          "Chủ đề được chọn là Lập trình hướng đối tượng (OOP).",
          'Prompt cơ bản: “Tạo câu hỏi ôn tập về OOP.”',
          'Prompt cải tiến: “Hãy tạo 10 câu hỏi ôn tập về lập trình hướng đối tượng gồm các mức độ dễ, trung bình và khó.”',
          'Prompt nâng cao: “Bạn là giảng viên môn Lập trình hướng đối tượng. Hãy tạo 5 câu hỏi trắc nghiệm, 3 câu hỏi tự luận và 2 câu hỏi vận dụng thực tế. Sau mỗi câu hỏi hãy cung cấp đáp án và giải thích ngắn gọn.”',
        ],
        figure: "Hình 6–8: Kết quả của prompt cơ bản, cải tiến và nâng cao.",
      },
      {
        heading: "Bước 5: So sánh kết quả",
        paragraphs: [
          "Prompt cơ bản thường cho câu trả lời ngắn gọn nhưng thiếu chiều sâu.",
          "Prompt cải tiến cung cấp thêm bối cảnh và yêu cầu cụ thể nên kết quả có cấu trúc rõ ràng hơn.",
          "Prompt nâng cao áp dụng các kỹ thuật Prompt Engineering như Role Prompting, Chain of Thought và Structured Output, giúp câu trả lời chất lượng cao hơn đáng kể.",
        ],
        figure: "Bảng so sánh: độ chi tiết, tính chính xác, cấu trúc và khả năng áp dụng học tập.",
      },
      {
        heading: "Bước 6: Phân tích hiệu quả của Prompt",
        paragraphs: [
          "Prompt càng cụ thể thì AI càng hiểu rõ yêu cầu.",
          "Việc xác định vai trò giúp AI trả lời phù hợp với ngữ cảnh.",
          "Chia nhiệm vụ thành nhiều bước giúp kết quả đầy đủ hơn.",
          "Yêu cầu định dạng đầu ra làm cho nội dung dễ đọc và dễ sử dụng.",
          "Cung cấp bối cảnh giúp giảm sự mơ hồ trong câu trả lời.",
        ],
        figure: "Hình 9: Các nguyên nhân làm tăng hiệu quả của Prompt.",
      },
      {
        heading: "Bước 7: Tổng hợp nguyên tắc viết Prompt hiệu quả",
        paragraphs: [
          "Nguyên tắc 1: Mô tả rõ mục tiêu.",
          "Nguyên tắc 2: Cung cấp bối cảnh cho người dùng.",
          "Nguyên tắc 3: Chỉ định vai trò phù hợp.",
          "Nguyên tắc 4: Chia nhỏ nhiệm vụ thành từng bước cụ thể.",
          "Nguyên tắc 5: Quy định định dạng đầu ra.",
          "Nguyên tắc 6: Kiểm tra và cải tiến prompt qua nhiều phiên bản.",
        ],
        figure: "Hình 10: Tóm tắt nguyên tắc viết Prompt hiệu quả.",
      },
    ],
    conclusion:
      "Qua bài thực hành, tôi nhận thấy chất lượng câu trả lời của AI phụ thuộc rất lớn vào cách xây dựng Prompt. Việc sử dụng các kỹ thuật Prompt Engineering như Role Prompting, Chain-of-Thought và Structured Output giúp nâng cao đáng kể độ chính xác, tính đầy đủ và khả năng ứng dụng của kết quả trong học tập và nghiên cứu.",
    content: [
      "Lựa chọn ba tác vụ học tập phù hợp để thử nghiệm prompt.",
      "So sánh hiệu quả của prompt cơ bản, cải tiến và nâng cao.",
      "Tổng hợp nguyên tắc viết prompt hiệu quả cho học tập.",
    ],
    skills: ["Prompt engineering", "Ứng dụng AI", "Kiểm chứng thông tin", "Học tập thông minh"],
  },
  {
    id: "hop-tac-truc-tuyen",
    title: "Bài 4 - Hợp tác trực tuyến",
    description: "Sử dụng công cụ hợp tác trực tuyến trong dự án nhóm.",
    image: "https://picsum.photos/600/400?4",
    reportTitle: "BÁO CÁO CÁ NHÂN",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "MSSV", value: "................................" },
      { label: "Lớp", value: "................................" },
      { label: "Thời gian thực hiện", value: "01 tuần" },
    ],
    sections: [
      {
        heading: "I. Giới thiệu",
        paragraphs: [
          "Trong quá trình thực hiện dự án nhóm, việc sử dụng các công cụ hợp tác trực tuyến giúp các thành viên phối hợp hiệu quả hơn, quản lý công việc khoa học hơn và tăng khả năng trao đổi thông tin từ xa.",
          "Trong dự án này, tôi sử dụng bốn công cụ: Trello, Google Docs, Google Drive và Discord.",
        ],
        figure: "Hình 1: Các công cụ hợp tác trực tuyến được sử dụng.",
      },
      {
        heading: "II. Quá trình sử dụng công cụ",
        paragraphs: [
          "1. Trello – Quản lý nhiệm vụ cá nhân: Tôi tham gia vào bảng quản lý dự án của nhóm trên Trello. Các nhiệm vụ được giao gồm thiết kế giao diện người dùng, viết tài liệu đặc tả và kiểm thử chức năng. Mỗi nhiệm vụ đều có mô tả, deadline, nhãn phân loại và trạng thái xử lý.",
          "Trong tuần làm việc, tôi cập nhật tiến độ theo các trạng thái To Do, In Progress, Review và Done.",
          "2. Google Docs – Soạn thảo cộng tác: Tôi tham gia biên soạn tài liệu báo cáo dự án bằng Google Docs, viết phần phân tích yêu cầu, bổ sung sơ đồ Use Case, chỉnh sửa lỗi trình bày và thêm nhận xét cho thành viên khác.",
          "3. Google Drive – Lưu trữ và quản lý tài nguyên: Tôi chịu trách nhiệm quản lý tài liệu thiết kế và hình ảnh dự án theo cấu trúc thư mục và quy tắc đặt tên thống nhất.",
          "4. Discord – Giao tiếp nhóm: Discord được sử dụng để trao đổi tiến độ, phân công công việc, họp nhóm trực tuyến và giải quyết các vấn đề phát sinh.",
        ],
        figure: "Hình 2–9: Minh chứng sử dụng Trello, Google Docs, Google Drive và Discord.",
      },
      {
        heading: "III. Phân tích hiệu quả của các công cụ",
        paragraphs: [
          "Trello có ưu điểm là dễ quản lý tiến độ, theo dõi deadline và trực quan bằng Kanban Board, nhưng khó quản lý khi dự án quá lớn.",
          "Google Docs giúp nhiều người cùng chỉnh sửa, theo dõi lịch sử thay đổi và bình luận trực tiếp, nhưng phụ thuộc vào kết nối Internet.",
          "Google Drive dễ chia sẻ tài liệu, đồng bộ dữ liệu tự động và quản lý quyền truy cập linh hoạt, nhưng dung lượng miễn phí có giới hạn.",
          "Discord hỗ trợ trao đổi nhanh, gọi thoại, chia sẻ màn hình và thông báo tức thời, nhưng nhiều thông báo có thể gây phân tâm.",
        ],
        figure: "Bảng phân tích ưu nhược điểm của bốn công cụ hợp tác trực tuyến.",
      },
      {
        heading: "IV. Các thách thức và giải pháp",
        paragraphs: [
          "Thách thức 1: Thành viên cập nhật tiến độ không thường xuyên. Giải pháp: thiết lập deadline và nhắc nhở định kỳ trên Trello.",
          "Thách thức 2: Trùng lặp chỉnh sửa tài liệu. Giải pháp: sử dụng Comment và Suggesting Mode trong Google Docs.",
          "Thách thức 3: Khó tìm kiếm tài liệu. Giải pháp: xây dựng cấu trúc thư mục nhiều cấp trên Google Drive và thống nhất quy tắc đặt tên tệp.",
        ],
        figure: "Hình 10: Các giải pháp xử lý thách thức trong dự án nhóm.",
      },
    ],
    conclusion:
      "Qua quá trình tham gia dự án, tôi đã sử dụng hiệu quả các công cụ hợp tác trực tuyến gồm Trello, Google Docs, Google Drive và Discord. Các công cụ này giúp tôi quản lý nhiệm vụ cá nhân, cộng tác với các thành viên khác, lưu trữ tài liệu khoa học và nâng cao hiệu quả làm việc nhóm.",
    content: [
      "Sử dụng Trello, Google Docs, Google Drive và Discord trong dự án nhóm.",
      "Phân tích ưu nhược điểm và đề xuất giải pháp cải thiện hiệu quả làm việc.",
      "Tổng kết kinh nghiệm hợp tác trực tuyến cho các dự án học tập và công việc.",
    ],
    skills: ["Làm việc nhóm", "Cộng tác trực tuyến", "Quản lý tiến độ", "Chia sẻ tài liệu"],
  },
  {
    id: "sang-tao-noi-dung-so",
    title: "Bài 5 - Sáng tạo nội dung số",
    description: "Báo cáo sử dụng công cụ AI tạo sinh trong sáng tạo nội dung số.",
    image: "https://picsum.photos/600/400?5",
    reportTitle: "BÁO CÁO SỬ DỤNG CÔNG CỤ AI TẠO SINH TRONG SÁNG TẠO NỘI DUNG SỐ",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "MSSV", value: "..................................." },
      { label: "Lớp", value: "..................................." },
    ],
    sections: [
      {
        heading: "I. Giới thiệu dự án",
        paragraphs: [
          "Mục tiêu của dự án là xây dựng một infographic giới thiệu các ứng dụng của Trí tuệ nhân tạo (AI) trong học tập và lập trình.",
          "Sản phẩm cuối cùng được thiết kế dưới dạng infographic trực quan, kết hợp giữa nội dung văn bản, hình ảnh minh họa và bố cục thiết kế hiện đại.",
          "Trong quá trình thực hiện tôi sử dụng ba công cụ AI: ChatGPT, DALL·E và Canva AI.",
        ],
        figure: "Hình 1: Mục tiêu dự án và các công cụ AI được sử dụng.",
      },
      {
        heading: "II. Quá trình sử dụng AI",
        paragraphs: [
          "1. Sử dụng ChatGPT để xây dựng nội dung: Tôi nhập prompt về viết nội dung infographic về ứng dụng AI trong học tập và lập trình dành cho sinh viên CNTT. ChatGPT đề xuất các ý tưởng như hỗ trợ học tập cá nhân hóa, tạo mã nguồn, kiểm thử phần mềm, phân tích dữ liệu và hỗ trợ nghiên cứu. Tôi rút gọn nội dung còn 5 mục chính và bổ sung ưu điểm, thách thức và xu hướng tương lai.",
          "2. Sử dụng DALL·E để tạo hình ảnh: Tôi sử dụng prompt tiếng Anh để tạo hình minh họa về sinh viên sử dụng AI trong học tập, lập trình và phân tích dữ liệu. Kết quả gồm nhiều hình ảnh minh họa phù hợp, sau đó tôi chọn 2 hình phù hợp nhất, cắt bỏ nền dư thừa và chỉnh kích thước để phù hợp với bố cục infographic.",
          "3. Sử dụng Canva AI để thiết kế: Tôi sử dụng prompt để tạo mẫu bố cục infographic. Sau đó chỉnh sửa màu sắc, sắp xếp bố cục, bổ sung hình ảnh từ DALL·E và thêm nội dung đã biên tập từ ChatGPT để hoàn thiện sản phẩm.",
        ],
        figure: "Hình 2–7: Minh chứng các bước sử dụng ChatGPT, DALL·E và Canva AI.",
      },
      {
        heading: "III. So sánh các công cụ AI",
        paragraphs: [
          "ChatGPT mạnh trong việc tạo nội dung có cấu trúc và gợi ý ý tưởng, giúp tiết kiệm thời gian nghiên cứu ban đầu.",
          "DALL·E có khả năng tạo hình ảnh độc đáo theo mô tả bằng ngôn ngữ tự nhiên, nhưng một số hình ảnh cần chỉnh sửa để phù hợp với mục tiêu thiết kế.",
          "Canva AI hỗ trợ rất tốt trong việc xây dựng bố cục và thiết kế trực quan, đặc biệt là kết hợp nhiều loại nội dung thành một sản phẩm hoàn chỉnh.",
          "Ba công cụ bổ sung cho nhau thay vì thay thế lẫn nhau.",
        ],
        figure: "Bảng so sánh các công cụ AI theo tiêu chí tạo văn bản, tạo hình ảnh, thiết kế bố cục, tốc độ và khả năng chỉnh sửa.",
      },
      {
        heading: "IV. Vai trò của AI trong quá trình sáng tạo",
        paragraphs: [
          "AI đóng vai trò là công cụ hỗ trợ sáng tạo thay vì thay thế hoàn toàn con người.",
          "AI làm tốt các phần như đề xuất ý tưởng, tạo nội dung ban đầu, sinh hình ảnh minh họa và gợi ý bố cục thiết kế, nhưng còn hạn chế ở việc hiểu hoàn toàn mục tiêu cá nhân, nội dung đôi khi dài dòng và hình ảnh chưa chắc chắn chính xác tuyệt đối.",
          "Với AI, tôi tiết kiệm được nhiều thời gian chuẩn bị và tập trung hơn vào việc đánh giá, chỉnh sửa và hoàn thiện sản phẩm.",
        ],
        figure: "Hình 8: Vai trò hỗ trợ của AI trong quy trình sáng tạo.",
      },
      {
        heading: "V. Đóng góp sáng tạo cá nhân",
        paragraphs: [
          "Mặc dù sử dụng AI hỗ trợ, tôi vẫn thực hiện các công việc như lựa chọn chủ đề, thiết kế bố cục cuối cùng, chỉnh sửa nội dung, chọn hình ảnh phù hợp, điều chỉnh màu sắc và phong cách trình bày, cũng như đánh giá và hoàn thiện sản phẩm.",
          "Ước tính AI hỗ trợ khoảng 40% và đóng góp cá nhân khoảng 60%, giúp sản phẩm mang dấu ấn cá nhân thay vì hoàn toàn phụ thuộc vào AI.",
        ],
        figure: "Hình 9: Đóng góp sáng tạo cá nhân trong dự án.",
      },
    ],
    conclusion:
      "Qua dự án này, tôi đã sử dụng hiệu quả ChatGPT, DALL·E và Canva AI để xây dựng một infographic hoàn chỉnh. AI giúp tăng tốc quá trình sáng tạo, hỗ trợ tạo nội dung và hình ảnh chất lượng cao. Tuy nhiên, vai trò của con người vẫn rất quan trọng trong việc đánh giá, chỉnh sửa và định hướng sản phẩm cuối cùng.",
    content: [
      "Sử dụng AI để xây dựng nội dung, hình ảnh và bố cục infographic.",
      "So sánh hiệu quả của ChatGPT, DALL·E và Canva AI trong từng bước thực hiện.",
      "Phân tích vai trò của AI và đóng góp sáng tạo cá nhân trong sản phẩm cuối cùng.",
    ],
    skills: ["AI tạo sinh", "Sáng tạo nội dung số", "Thiết kế infographic", "Biên tập nội dung"],
  },
  {
    id: "liem-chinh-hoc-thuat",
    title: "Bài 6 - Liêm chính học thuật",
    description: "Báo cáo về sử dụng AI có trách nhiệm trong học tập và nghiên cứu.",
    image: "https://picsum.photos/600/400?6",
    reportTitle: "BÁO CÁO: PHÁT TRIỂN KỶ NĂNG SỬ DỤNG AI CÓ TRÁCH NHIỆM TRONG HỌC TẬP VÀ NGHIÊN CỨU",
    meta: [
      { label: "Họ và tên", value: "Nguyễn Đức Duy" },
      { label: "MSSV", value: "..................................." },
      { label: "Lớp", value: "..................................." },
      { label: "Thời gian thực hiện", value: "01 tuần" },
    ],
    sections: [
      {
        heading: "I. Tóm tắt chính sách và bối cảnh sử dụng AI",
        paragraphs: [
          "Trong bối cảnh đại học hiện nay, AI được xem là công cụ hỗ trợ học tập và nghiên cứu nhưng cần được sử dụng theo nguyên tắc minh bạch, đúng mục đích và có trách nhiệm.",
          "Các trường đại học, trong đó có VNU, đang định hướng việc sử dụng AI như một công cụ hỗ trợ để nâng cao năng lực tự học, chứ không phải để thay thế tư duy cá nhân hay tạo ra sản phẩm học thuật giả mạo.",
          "Chính sách của VNU nhấn mạnh việc khai thác AI để hỗ trợ ý tưởng, sửa lỗi ngữ pháp, tìm tài liệu tham khảo hoặc giải thích khái niệm phức tạp, nhưng nghiêm cấm việc dùng AI để tạo toàn bộ nội dung bài làm hoặc khóa luận dưới tên mình.",
        ],
        figure: "Hình 1: Bối cảnh và nguyên tắc sử dụng AI trong môi trường học thuật.",
      },
      {
        heading: "II. So sánh cách tiếp cận giữa các đơn vị",
        paragraphs: [
          "VNU tiếp cận theo hướng quản lý dựa trên năng lực và sự chủ động của từng đơn vị thành viên, trong khi HUST tập trung mạnh vào các công cụ kiểm tra đạo văn và xử phạt rõ ràng.",
          "Cách tiếp cận của VNU mang tính linh hoạt hơn, phù hợp với mô hình đại học đa ngành và đa lĩnh vực. Tuy nhiên, thách thức lớn là đảm bảo đồng bộ giữa các khoa và năng lực nhận biết sản phẩm AI của đội ngũ giảng viên.",
        ],
        figure: "Hình 2: So sánh chính sách AI giữa VNU và HUST.",
      },
      {
        heading: "III. Thực hiện nhiệm vụ học tập với AI",
        paragraphs: [
          "Trong bài thực hành, tôi chọn nhiệm vụ xây dựng đề cương nghiên cứu cho môn Phương pháp nghiên cứu khoa học. Tôi sử dụng AI để đề xuất cấu trúc chương, xây dựng câu hỏi khảo sát và kiểm tra các thuật ngữ chuyên ngành.",
          "Sau khi nhận đầu ra từ AI, tôi tiến hành đối chiếu với tài liệu giáo trình và chỉnh sửa lại ngôn ngữ, bối cảnh và nội dung phù hợp với sinh viên Việt Nam. Việc này giúp tôi giữ được tính chính xác và tính phù hợp học thuật.",
          "Tôi cũng ghi nhận rõ việc sử dụng AI trong báo cáo để đảm bảo minh bạch và tuân thủ quy định học thuật.",
        ],
        figure: "Hình 3: Quy trình sử dụng AI hỗ trợ học tập nhưng vẫn giữ vai trò kiểm soát của người học.",
      },
      {
        heading: "IV. Phân tích vấn đề đạo đức trong học thuật",
        paragraphs: [
          "Một ranh giới quan trọng là giữa hỗ trợ hợp lý và gian lận học thuật. Hỗ trợ hợp lý là khi AI được dùng như người bạn học để gợi ý, giải thích hoặc tối ưu câu chữ, còn gian lận học thuật là khi AI viết toàn bộ bài làm và người học không tham gia tư duy thực sự.",
          "Việc sử dụng ý tưởng hoặc đoạn văn của AI mà không khai báo được xem là hành vi đạo văn kỹ thuật số. Do đó, trích dẫn AI đúng cách là cần thiết để bảo vệ sự liêm chính của nghiên cứu.",
          "Bên cạnh đó, AI cũng có tác động tích cực đến quá trình học tập khi giúp rút ngắn thời gian thực hiện các công việc lặp đi lặp lại, nhưng nếu lạm dụng, người học sẽ mất khả năng lập luận logic, kỹ năng viết học thuật và khả năng kiểm chứng thông tin.",
        ],
        figure: "Hình 4: Ranh giới giữa hỗ trợ AI hợp lý và gian lận học thuật.",
      },
      {
        heading: "V. Sáu nguyên tắc sử dụng AI có trách nhiệm",
        paragraphs: [
          "Nguyên tắc 1: Bản quyền và trách nhiệm của con người luôn là trên hết, AI chỉ là trợ lý.",
          "Nguyên tắc 2: Minh bạch là nền tảng, mọi mức độ sử dụng AI đều cần được công khai.",
          "Nguyên tắc 3: Hoài nghi khoa học, luôn kiểm chứng dữ liệu, tên tác giả và năm xuất bản do AI cung cấp.",
          "Nguyên tắc 4: Không sao chép nguyên văn, mọi ý tưởng phải được xử lý qua tư duy của chính mình.",
          "Nguyên tắc 5: Bảo mật thông tin tri thức, không đưa dữ liệu nhạy cảm lên hệ thống AI.",
          "Nguyên tắc 6: Sử dụng AI để nâng tầm, không để thay thế mục tiêu học tập và nghiên cứu.",
        ],
        figure: "Hình 5: Sáu nguyên tắc chính trong sử dụng AI có trách nhiệm.",
      },
      {
        heading: "VI. Ý tưởng thiết kế infographic",
        paragraphs: [
          "Infographic có chủ đề 'Sử dụng AI có trách nhiệm trong học tập' được thiết kế với phong cách hiện đại, font chữ dễ đọc, phối màu xanh dương của VNU và màu trắng.",
          "Bố cục chia thành ba phần chính: hỗ trợ hợp lý, hành vi gian lận học thuật và quy trình 3 bước liêm chính: Prompt – Verify – Cite.",
          "Thông điệp cuối cùng là: Trí tuệ nhân tạo nâng bước tri thức – Tư duy độc lập định vị bản thân.",
        ],
        figure: "Hình 6: Ý tưởng bố cục và thông điệp chính của infographic.",
      },
    ],
    conclusion:
      "Qua bài thực hành, tôi nhận ra rằng AI là công cụ hỗ trợ rất hữu ích nhưng chỉ phát huy hiệu quả khi được sử dụng đúng mục đích, minh bạch và có kiểm chứng. Liêm chính học thuật không chỉ là tuân thủ quy định, mà còn là cách bảo vệ năng lực tư duy, đạo đức nghiên cứu và giá trị của chính bản thân người học.",
    content: [
      "Phân tích chính sách và đạo đức sử dụng AI trong học tập và nghiên cứu.",
      "So sánh cách tiếp cận của VNU và HUST về AI trong học thuật.",
      "Tổng hợp sáu nguyên tắc sử dụng AI có trách nhiệm và ý tưởng infographic liên quan.",
    ],
    skills: ["Liêm chính học thuật", "Sử dụng AI có trách nhiệm", "Trích dẫn nguồn", "Đạo đức số"],
  },
];
