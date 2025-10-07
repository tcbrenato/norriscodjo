import { useState, useEffect } from 'react';
import { Lock, Download, Trash2, Users, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Participant {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  zone: string;
  created_at: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'Norris2025';

  useEffect(() => {
    if (isAuthenticated) {
      loadParticipants();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const loadParticipants = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('participants')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setParticipants(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette entrée ?')) {
      return;
    }

    const { error } = await supabase
      .from('participants')
      .delete()
      .eq('id', id);

    if (!error) {
      setParticipants(participants.filter(p => p.id !== id));
    }
  };

  const handleExport = () => {
    const csvContent = [
      ['Nom', 'Prénoms', 'Téléphone', 'Email', 'Zone', 'Date d\'enregistrement'],
      ...participants.map(p => [
        p.last_name,
        p.first_name,
        p.phone,
        p.email,
        p.zone,
        new Date(p.created_at).toLocaleString('fr-FR')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `participants_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-4 rounded-full">
                <Lock className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Administration
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Accès réservé aux administrateurs
            </p>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Entrez le mot de passe"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-yellow-500 transition-all"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Panneau d'administration
              </h1>
              <p className="text-gray-600">
                Gérez les informations des participants
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                <Download className="w-5 h-5" />
                Exporter CSV
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all"
              >
                <Lock className="w-5 h-5" />
                Déconnexion
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold opacity-90">Total Participants</p>
                  <p className="text-4xl font-bold mt-1">{participants.length}</p>
                </div>
                <Users className="w-12 h-12 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold opacity-90">Aujourd'hui</p>
                  <p className="text-4xl font-bold mt-1">
                    {participants.filter(p =>
                      new Date(p.created_at).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
                <Calendar className="w-12 h-12 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold opacity-90">Cette semaine</p>
                  <p className="text-4xl font-bold mt-1">
                    {participants.filter(p => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(p.created_at) >= weekAgo;
                    }).length}
                  </p>
                </div>
                <Calendar className="w-12 h-12 opacity-80" />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Chargement des données...</p>
            </div>
          ) : participants.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Aucun participant enregistré pour le moment</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nom complet
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Téléphone
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Zone
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {participants.map((participant) => (
                    <tr key={participant.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {participant.first_name} {participant.last_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {participant.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {participant.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                          {participant.zone}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(participant.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDelete(participant.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
