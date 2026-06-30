import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  CalendarClock,
  CheckCircle2,
  Download,
  Eye,
  KeyRound,
  Lock,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  Save,
  ShieldCheck,
  Trash2,
  User,
  UserCog,
  Wifi,
  X,
} from "lucide-react";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import { useAuth } from "../../components/common/AuthContext";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Account & Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "volunteer", label: "Volunteer Preferences", icon: UserCog },
  { id: "privacy", label: "Privacy", icon: Eye },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle },
];

const notificationRows = [
  "New lost cat reports near me",
  "AI match found for my report",
  "Relay request nearby",
  "Relay status updates",
  "Weekly community digest email",
  "Marketing/announcements",
];

const sessions = [
  { id: 1, device: "Chrome on Windows", location: "Noida, India", active: "Active now" },
  { id: 2, device: "Safari on iPhone", location: "Delhi, India", active: "Yesterday at 8:30 PM" },
  { id: 3, device: "Edge on Laptop", location: "Ghaziabad, India", active: "June 28 at 10:12 AM" },
];

function Field({ label, children, helper }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700">
        {label}
      </span>
      <div className="mt-2">
        {children}
      </div>
      {helper && (
        <p className="mt-2 text-xs text-slate-400">
          {helper}
        </p>
      )}
    </label>
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  );
}

function Toggle({ checked, onChange, label, description, locked }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div>
        <p className="font-bold text-slate-800">
          {label}
          {locked && (
            <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-600">
              Priority
            </span>
          )}
        </p>
        {description && (
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => !locked && onChange(!checked)}
        className={`relative h-8 w-14 shrink-0 rounded-full transition focus:outline-none focus:ring-4 focus:ring-orange-100 ${
          checked ? "bg-orange-500" : "bg-slate-300"
        } ${locked ? "cursor-not-allowed opacity-80" : ""}`}
        aria-pressed={checked}
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
            checked ? "left-7" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function Card({ title, description, icon: Icon, children, danger = false }) {
  return (
    <section className={`rounded-3xl border bg-white p-6 shadow-sm ${
      danger ? "border-red-200" : "border-slate-200"
    }`}>
      <div className="mb-5 flex items-start gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
          danger ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-500"
        }`}>
          <Icon size={22} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function ConfirmModal({ type, onClose }) {
  const isDelete = type === "delete";
  const phrase = isDelete ? "DELETE MY ACCOUNT" : "DEACTIVATE";
  const [typed, setTyped] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-red-200 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <AlertTriangle size={22} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                {isDelete ? "Delete account" : "Deactivate account"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {isDelete
                  ? "This permanently removes reports, matches, relay history, and uploaded photos from your account."
                  : "This hides your profile, pauses notifications, and can be reversed by logging back in."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 hover:border-orange-300 hover:text-orange-500"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {isDelete && (
          <Field label="Password">
            <TextInput
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Re-enter your password"
            />
          </Field>
        )}

        <div className="mt-5">
          <Field label={`Type ${phrase} to confirm`}>
            <TextInput
              value={typed}
              onChange={(event) => setTyped(event.target.value)}
              placeholder={phrase}
            />
          </Field>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-600 hover:border-orange-300 hover:text-orange-500"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={typed !== phrase || (isDelete && !password)}
            className="rounded-2xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isDelete ? "Delete permanently" : "Deactivate"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Settings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [toast, setToast] = useState("");
  const [modalType, setModalType] = useState(null);
  const [profile, setProfile] = useState({
    name: user?.name || "PawTrace User",
    email: user?.email || "user@pawtrace.app",
    phone: "+91 98765 43210",
    bio: "Cat lover, available evenings and weekends.",
    location: "Sector 18, Noida",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [notifications, setNotifications] = useState(() =>
    Object.fromEntries(notificationRows.map((row) => [row, true])),
  );
  const [volunteerPrefs, setVolunteerPrefs] = useState({
    mode: true,
    radius: 8,
    foster: true,
    schedule: ["Weekday evenings", "Weekends"],
    notes: "Have a cat carrier and access to a car.",
    pauseFrom: "",
    pauseTo: "",
  });
  const [privacy, setPrivacy] = useState({
    showName: true,
    locationPrecision: "Approximate area only",
    contact: "Only matched users",
  });

  const passwordStrength = useMemo(() => {
    let score = 0;
    if (passwords.next.length >= 8) score += 1;
    if (/[A-Z]/.test(passwords.next)) score += 1;
    if (/[0-9]/.test(passwords.next)) score += 1;
    if (/[^A-Za-z0-9]/.test(passwords.next)) score += 1;
    return score;
  }, [passwords.next]);

  function save(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  }

  return (
    <div className="flex min-h-screen bg-[#FFFDF9]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />

        <section className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Settings
            </h1>
            <p className="mt-2 max-w-2xl text-slate-500">
              Manage profile details, alerts, volunteer availability, privacy, and account safety.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
            <ShieldCheck size={18} className="text-orange-500" />
            Account protected by PawTrace session security
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <nav className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left font-bold transition ${
                      isActive
                        ? "bg-orange-50 text-orange-500 shadow-sm"
                        : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="space-y-6">
            {activeTab === "profile" && (
              <>
                <Card
                  title="Profile"
                  description="Keep your contact details and nearby alert center up to date."
                  icon={User}
                >
                  <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="flex flex-col items-center rounded-3xl border border-orange-100 bg-orange-50/60 p-5">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-3xl font-extrabold text-orange-500 shadow-sm">
                        {profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      <button className="mt-4 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-600">
                        Change photo
                      </button>
                      <button className="mt-2 text-sm font-bold text-slate-400 hover:text-red-500">
                        Remove
                      </button>
                    </div>

                    <div className="grid flex-1 gap-4 md:grid-cols-2">
                      <Field label="Full name">
                        <TextInput value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} />
                      </Field>
                      <Field label="Email">
                        <div className="relative">
                          <TextInput value={profile.email} onChange={(event) => setProfile({ ...profile, email: event.target.value })} />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            Verified
                          </span>
                        </div>
                      </Field>
                      <Field label="Phone number" helper="Used for relay contact when you choose to share it.">
                        <TextInput value={profile.phone} onChange={(event) => setProfile({ ...profile, phone: event.target.value })} />
                      </Field>
                      <Field label="Home location">
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input
                            value={profile.location}
                            onChange={(event) => setProfile({ ...profile, location: event.target.value })}
                            className="h-13 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          />
                        </div>
                      </Field>
                      <Field label="Bio">
                        <textarea
                          value={profile.bio}
                          onChange={(event) => setProfile({ ...profile, bio: event.target.value })}
                          rows={4}
                          className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 md:col-span-2"
                        />
                      </Field>
                    </div>
                  </div>
                  <button onClick={() => save("Profile updated")} className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-600">
                    <Save size={18} />
                    Save Changes
                  </button>
                </Card>
              </>
            )}

            {activeTab === "security" && (
              <>
                <Card title="Change Password" description="Use a strong password to protect reports and relay history." icon={KeyRound}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field label="Current password">
                      <TextInput type="password" value={passwords.current} onChange={(event) => setPasswords({ ...passwords, current: event.target.value })} />
                    </Field>
                    <Field label="New password">
                      <TextInput type="password" value={passwords.next} onChange={(event) => setPasswords({ ...passwords, next: event.target.value })} />
                    </Field>
                    <Field label="Confirm password">
                      <TextInput type="password" value={passwords.confirm} onChange={(event) => setPasswords({ ...passwords, confirm: event.target.value })} />
                    </Field>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full bg-orange-500 transition-all" style={{ width: `${passwordStrength * 25}%` }} />
                  </div>
                  {passwords.confirm && passwords.next !== passwords.confirm && (
                    <p className="mt-2 text-sm font-semibold text-red-500">
                      Passwords do not match.
                    </p>
                  )}
                  <button onClick={() => save("Password updated")} className="mt-5 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-600">
                    Update Password
                  </button>
                </Card>

                <Card title="Active Sessions" description="Review devices currently signed in to PawTrace." icon={MonitorSmartphone}>
                  <div className="space-y-3">
                    {sessions.map((session) => (
                      <div key={session.id} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-bold text-slate-800">{session.device}</p>
                          <p className="mt-1 text-sm text-slate-500">{session.location} - {session.active}</p>
                        </div>
                        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:border-orange-300 hover:text-orange-500">
                          Log out
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            )}

            {activeTab === "notifications" && (
              <Card title="Notification Preferences" description="Choose what PawTrace can send and where it should arrive." icon={Bell}>
                <div className="space-y-3">
                  {notificationRows.map((row) => (
                    <div key={row} className="grid gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 lg:grid-cols-[1fr_170px_auto] lg:items-center">
                      <Toggle
                        label={row}
                        checked={notifications[row]}
                        locked={row === "AI match found for my report"}
                        onChange={(next) => setNotifications({ ...notifications, [row]: next })}
                      />
                      <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100">
                        <option>Both</option>
                        <option>In-app</option>
                        <option>Email</option>
                      </select>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Field label="Quiet hours start">
                    <TextInput type="time" defaultValue="22:00" />
                  </Field>
                  <Field label="Quiet hours end">
                    <TextInput type="time" defaultValue="07:00" />
                  </Field>
                </div>
                <button onClick={() => save("Notifications saved")} className="mt-6 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-600">
                  Save Notifications
                </button>
              </Card>
            )}

            {activeTab === "volunteer" && (
              <Card title="Volunteer Preferences" description="Set when and how PawTrace can request your help." icon={Wifi}>
                <div className="space-y-4">
                  <Toggle label="Volunteer Mode" description="Allow nearby relay requests when you are available." checked={volunteerPrefs.mode} onChange={(next) => setVolunteerPrefs({ ...volunteerPrefs, mode: next })} />
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="flex justify-between text-sm font-bold text-slate-700">
                      <span>Service radius</span>
                      <span>{volunteerPrefs.radius} km</span>
                    </div>
                    <input type="range" min="1" max="15" value={volunteerPrefs.radius} onChange={(event) => setVolunteerPrefs({ ...volunteerPrefs, radius: Number(event.target.value) })} className="mt-4 w-full accent-orange-500" />
                  </div>
                  <Toggle label="Available for fostering" checked={volunteerPrefs.foster} onChange={(next) => setVolunteerPrefs({ ...volunteerPrefs, foster: next })} />
                  <Field label="Skills and notes">
                    <textarea value={volunteerPrefs.notes} onChange={(event) => setVolunteerPrefs({ ...volunteerPrefs, notes: event.target.value })} rows={4} className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100" />
                  </Field>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Pause from">
                      <TextInput type="date" value={volunteerPrefs.pauseFrom} onChange={(event) => setVolunteerPrefs({ ...volunteerPrefs, pauseFrom: event.target.value })} />
                    </Field>
                    <Field label="Pause to">
                      <TextInput type="date" value={volunteerPrefs.pauseTo} onChange={(event) => setVolunteerPrefs({ ...volunteerPrefs, pauseTo: event.target.value })} />
                    </Field>
                  </div>
                </div>
                <button onClick={() => save("Volunteer preferences saved")} className="mt-6 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white hover:bg-orange-600">
                  Save Preferences
                </button>
              </Card>
            )}

            {activeTab === "privacy" && (
              <Card title="Privacy" description="Control what others can see and how they can contact you." icon={Eye}>
                <div className="space-y-4">
                  <Toggle label="Show my name to other users" checked={privacy.showName} onChange={(next) => setPrivacy({ ...privacy, showName: next })} />
                  <Field label="Location precision">
                    <select value={privacy.locationPrecision} onChange={(event) => setPrivacy({ ...privacy, locationPrecision: event.target.value })} className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100">
                      <option>Approximate area only</option>
                      <option>Share exact location</option>
                    </select>
                  </Field>
                  <Field label="Who can contact me">
                    <select value={privacy.contact} onChange={(event) => setPrivacy({ ...privacy, contact: event.target.value })} className="h-13 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100">
                      <option>Anyone</option>
                      <option>Only matched users</option>
                      <option>Only volunteers</option>
                    </select>
                  </Field>
                  <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 hover:border-orange-300 hover:text-orange-500">
                    <Download size={18} />
                    Download my data
                  </button>
                </div>
              </Card>
            )}

            {activeTab === "danger" && (
              <Card title="Danger Zone" description="These actions affect your account and rescue history." icon={AlertTriangle} danger>
                <div className="mb-5 rounded-2xl border border-orange-100 bg-orange-50/60 p-4 text-sm font-semibold text-slate-600">
                  Download your data before deleting your account so you keep a copy of reports and activity.
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-3xl border border-red-100 bg-red-50/40 p-5">
                    <CalendarClock className="text-red-500" size={24} />
                    <h3 className="mt-4 text-lg font-extrabold text-slate-900">Deactivate Account</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Hide your profile and pause notifications. You can return by logging in again.</p>
                    <button onClick={() => setModalType("deactivate")} className="mt-5 rounded-2xl border border-red-200 bg-white px-5 py-3 font-bold text-red-600 hover:bg-red-500 hover:text-white">
                      Deactivate
                    </button>
                  </div>
                  <div className="rounded-3xl border border-red-200 bg-red-50/40 p-5">
                    <Trash2 className="text-red-500" size={24} />
                    <h3 className="mt-4 text-lg font-extrabold text-slate-900">Delete Account</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Permanently delete your reports, matches, relay history, and photos.</p>
                    <button onClick={() => setModalType("delete")} className="mt-5 rounded-2xl bg-red-500 px-5 py-3 font-bold text-white hover:bg-red-600">
                      Delete Account
                    </button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

      {toast && (
        <div className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-4 font-bold text-slate-700 shadow-xl">
          <CheckCircle2 className="text-green-600" size={20} />
          {toast}
        </div>
      )}

      {modalType && (
        <ConfirmModal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
}
