**BỘ MÔN KỸ THUẬT PHẦN MỀM – KHOA CÔNG NGHỆ THÔNG TIN**  
**ĐỀ BÀI ĐỒ ÁN MÔN HỌC/CAPSTONE PROJECT**  
**Tên đề tài:** Xây dựng Hệ thống Hỗ trợ Luyện thi TOEIC Toàn diện (ToeicMaster)

## **1\. Bối cảnh và Mục tiêu Dự án (Project Background)**

**Bối cảnh:** EdTech Startup "SmartEnglish" đang đối mặt với bài toán nghẽn cổ chai trong quá trình mở rộng quy mô. Hiện tại, trung tâm vẫn quản lý kho đề thi qua Google Drive, chấm điểm thủ công bằng Excel và gửi báo cáo tiến độ cho học viên qua email. Quy trình này dẫn đến độ trễ cao, dễ sai sót dữ liệu và không thể cung cấp trải nghiệm học tập cá nhân hóa khi số lượng học viên vượt ngưỡng 1,000 người.

**Mục tiêu hệ thống:** Xây dựng một nền tảng Web/App tập trung nhằm số hóa toàn bộ quy trình luyện thi TOEIC. Hệ thống phải hỗ trợ trọn vẹn cả định dạng TOEIC 2 kỹ năng (Listening & Reading) và 4 kỹ năng (bổ sung Speaking & Writing). Mục tiêu cốt lõi là tự động hóa khâu chấm điểm, chuẩn hóa kho học liệu đa phương tiện, và ứng dụng dữ liệu để vạch ra lộ trình khắc phục điểm yếu cho từng học viên.

## **2\. Danh sách Actor (Tác nhân)**

* **Học viên (User/Learner):** Tác nhân chính thực hiện các bài thi thử. Phạm vi truy cập giới hạn trong không gian học tập cá nhân, xem lịch sử làm bài, nhận gợi ý lộ trình và tham gia bảng xếp hạng.  
*   
* **Giảng viên/Người tạo nội dung (Content Creator):** Chịu trách nhiệm học thuật. Được quyền thao tác CRUD (Tạo, Đọc, Cập nhật, Xóa) trên ngân hàng câu hỏi, tải lên file audio/hình ảnh, ghép đề thi và chấm điểm thủ công cho các bài thi Speaking/Writing.  
*   
* **Quản trị viên (Admin):** Nắm quyền cao nhất. Quản lý phân quyền tài khoản, cấu hình tham số hệ thống (thời gian làm bài, công thức quy đổi điểm chuẩn TOEIC), và theo dõi số liệu hoạt động toàn nền tảng.  
*   
* **Hệ thống Tự động (System Auto-Grader):** Background worker chạy ngầm. Tự động thu thập đáp án từ Client, đối chiếu Database, tính toán điểm số cho phần Listening/Reading và cập nhật trạng thái Streak (chuỗi ngày học) vào lúc 00:00 mỗi ngày.  
* 

## **3\. Yêu cầu Chức năng (Functional Requirements \- FR)**

**Phân hệ Quản lý Tài khoản & Profile (Module Auth)**

* **FR-AUTH-01:** Xác thực người dùng bằng JWT (JSON Web Token), hỗ trợ đăng nhập qua Email/Password và SSO (Google/Facebook).  
*   
* **FR-AUTH-02:** Cho phép Học viên thiết lập "Điểm mục tiêu" (Target Score) và ngày dự thi thực tế để hệ thống đếm ngược.  
*   
* **FR-AUTH-03:** Phân tách rõ ràng cơ sở dữ liệu xác thực (UserAuth) và thông tin cá nhân (User Profile) theo chuẩn quan hệ One-to-Many để quản lý lịch sử phiên đăng nhập.  
* 

**Phân hệ Luyện tập & Thử sức (Practice & Mock Test)**

* **FR-TEST-01:** Chế độ Mock Test mô phỏng thực tế với đồng hồ đếm ngược nghiêm ngặt (120 phút cho 200 câu). Vô hiệu hóa tính năng tua ngược (rewind) audio trong Part 1-4.  
*   
* **FR-TEST-02:** Tự động lưu trạng thái bài làm (Auto-save) của học viên xuống Local Storage hoặc gọi API cập nhật mỗi 1 phút để phòng chống mất dữ liệu khi mất kết nối mạng.  
*   
* **FR-TEST-03:** Auto-Grader lập tức trả về điểm số dựa trên bảng quy đổi chuẩn TOEIC ngay khi nộp bài thi Listening/Reading.  
* 

**Phân hệ Quản lý Ngân hàng câu hỏi (Question Bank)**

* **FR-BANK-01:** Quản lý phân cấp cấu trúc đề thi. Một Exam bao gồm nhiều Parts (Part 1-7), mỗi Part chứa nhiều Question Groups (đoạn văn/đoạn hội thoại), mỗi Group chứa nhiều Questions.  
*   
* **FR-BANK-02:** Quản trị viên tải lên và gắn thẻ (tag) file MP3, JPG/PNG. Media phải được gắn ID và liên kết chặt chẽ với từng Question Group.  
* 

**Phân hệ Phân tích & Lộ trình (Analytics & Learning Path)**

* **FR-ANA-01:** Biểu diễn kết quả làm bài dưới dạng Radar Chart, chỉ rõ tỷ lệ làm đúng (Accuracy rate) theo từng Part hoặc từng dạng ngữ pháp/từ vựng.  
*   
* **FR-ANA-02:** Thuật toán phân tích: Nếu tỷ lệ đúng của một Part \< 50% trong 3 bài test gần nhất, hệ thống tự động đẩy các bài tập mini-test của Part đó vào "Danh sách cần cải thiện".  
* 

**Phân hệ Gamification & Tương tác (Gamification)**

* **FR-GAM-01:** Logic tính Streak: Cập nhật biến số ngày học liên tiếp nếu học viên hoàn thành ít nhất 1 bài tập có điểm số \> 0 trước 23:59 mỗi ngày.  
*   
* **FR-GAM-02:** Bảng xếp hạng (Leaderboard) hàng tuần dựa trên tổng số câu trả lời đúng, đồng bộ realtime hoặc cache Redis.  
* 

## **4\. Yêu cầu Phi chức năng (Non-Functional Requirements \- NFR)**

* **Hiệu năng (Performance):** Thời gian tải file Audio/Image phải \< 1.5s (yêu cầu tích hợp CDN hoặc tối ưu hóa kích thước file). Độ trễ API chấm điểm và nộp bài không vượt quá 500ms. Hệ thống chịu tải được tối thiểu 500 CCU (Concurrent Users) trong các khung giờ cao điểm ôn thi.  
*   
* **Bảo mật (Security):** Mật khẩu phải được băm (hashing) bằng Bcrypt. API truy xuất đề thi và media bắt buộc phải kèm Bearer Token hợp lệ để chống cào dữ liệu (web scraping).  
*   
* **Khả năng mở rộng (Scalability):** Thiết kế kiến trúc theo hướng Modular Monolith hoặc Microservices. Ví dụ: Tách biệt UserService (xác lý user), ExamService (xử lý đề thi và chấm điểm). Khuyến khích sử dụng .NET Core hoặc Node.js cho Backend.  
*   
* **UI/UX:** Giao diện Responsive tuyệt đối. Ưu tiên Mobile-first cho chế độ Practice (ôn tập từ vựng, mini-test) và Desktop-first cho chế độ Full Mock Test và Admin Dashboard.  
* 

## **5\. Yêu cầu Nộp bài (Deliverables)**

Nhóm sinh viên đóng vai trò là một đội ngũ kỹ sư phần mềm trọn gói, yêu cầu nộp các sản phẩm sau:

1. **Tài liệu Đặc tả Yêu cầu (SRS \- Software Requirements Specification):** Theo chuẩn format IEEE, mô tả chi tiết các luồng nghiệp vụ không được nhập nhằng.  
2.   
3. **Bộ Sơ đồ Thiết kế (System Design Diagrams):**  
4. 

   * Use Case Diagram (Tổng quan và chi tiết cho luồng Làm bài thi).  
   *   
   * ERD (Entity-Relationship Diagram): Yêu cầu chuẩn hóa tối thiểu đạt dạng chuẩn 3 (3NF).  
   *   
   * Sequence Diagram: Cho luồng Đăng nhập, Tạo đề thi, và Nộp bài chấm điểm.  
   *   
5. **Mã nguồn (Source Code):** Tổ chức thư mục rõ ràng, tuân thủ Clean Code. Quản lý source code trên GitHub/GitLab với lịch sử commit thể hiện rõ tiến độ. (Khuyến nghị stack: .NET Core/Node.js cho API, React/Vue cho Frontend).  
6.   
7. **Kiểm thử (Testing):** Nộp kèm Test Plan và Test Report. Yêu cầu phải có kịch bản kiểm thử (Test Cases) phủ kín các Yêu cầu chức năng (FR) ở trên, đặc biệt là logic chấm điểm của phần mềm và giới hạn thời gian. Yêu cầu có Unit Test cho thuật toán quy đổi điểm.  
8. 

*Giảng viên kỳ vọng sự chuyên nghiệp trong từng dòng code và tài liệu. Các tính năng "nửa vời" không đo lường được sẽ bị đánh rớt. Chúc các em làm bài tốt.*  
