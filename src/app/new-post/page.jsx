import NewPostForm from './NewPostForm'; // بدون dynamic import

export default function Page() {
    return (
        <div className="p-6 ">
            <h1 className="text-2xl mb-4 text-center font-bold">ساخت پست جدید</h1>
            <NewPostForm />
        </div>
    );
}
